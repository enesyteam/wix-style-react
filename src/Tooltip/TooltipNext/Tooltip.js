import React from 'react';
import PropTypes from 'prop-types';

import { Popover } from 'wix-ui-core/popover';
import Text from '../../Text';
import styles from './Tooltip.st.css';

/**
 * Next Tooltip
 */
class Tooltip extends React.PureComponent {
  static displayName = 'Tooltip';

  state = { isOpen: false };

  static propTypes = {
    /** applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,
    /** tooltip trigger element. Can be either string or renderable node */
    children: PropTypes.node.isRequired,
    /** tooltip content. Can be either string or renderable node */
    content: PropTypes.node,
    /** tooltips delay on show event */
    enterDelay: PropTypes.number,
    /** tooltips delay on hide event */
    exitDelay: PropTypes.number,
    /** tooltips content relation to a dom element */
    appendTo: PropTypes.string,
    /** tooltip content container width in pixels */
    maxWidth: PropTypes.number,
    /** callback on tooltips content show event */
    onShow: PropTypes.func,
    /** callback on tooltips content hide event */
    onHide: PropTypes.func,
    /** tooltip content placement in relation to target element */
    placement: PropTypes.string,
    /** to enable or disable arrow */
    showArrow: PropTypes.bool,
  };

  static defaultProps = {
    content: '',
    appendTo: 'parent',
    placement: 'top',
    showArrow: true,
    enterDelay: 200,
    exitDelay: 0,
    maxWidth: 204,
    onShow: () => ({}),
    onHide: () => ({}),
  };

  renderElement = () =>
    React.cloneElement(this.props.children, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

  renderContent = () => {
    const { content, maxWidth } = this.props;

    const text = (
      <div style={{ maxWidth: `${maxWidth}px` }}>
        <Text dataHook="tooltip-text" size="small" weight="normal" light>
          {content}
        </Text>
      </div>
    );

    const node = (
      <div data-hook="tooltip-node" style={{ maxWidth: `${maxWidth}px` }}>
        {content}
      </div>
    );
    return typeof content === 'string' ? text : node;
  };

  open = () => {
    const { onShow } = this.props;
    this.setState({ isOpen: true }, () => onShow());
  };

  close = () => {
    const { onHide } = this.props;
    this.setState({ isOpen: false }, () => onHide());
  };

  onFocus = (event, { focus }) => {
    this.open();
    focus();
  };

  onBlur = (event, { blur }) => {
    this.close();
    blur();
  };

  render() {
    const {
      appendTo,
      placement,
      exitDelay,
      enterDelay,
      showArrow,
      dataHook,
    } = this.props;
    const timeout = { enter: enterDelay, exit: exitDelay };
    return (
      <Popover
        {...styles('root', {}, this.props)}
        dataHook={dataHook}
        placement={placement}
        showArrow={showArrow}
        timeout={timeout}
        shown={this.state.isOpen}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        appendTo={appendTo}
      >
        <Popover.Element>{this.renderElement()}</Popover.Element>
        <Popover.Content>{this.renderContent()}</Popover.Content>
      </Popover>
    );
  }
}

export default Tooltip;
