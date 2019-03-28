import React from 'react';
import PropTypes from 'prop-types';

import { Popover } from 'wix-ui-core/popover';
import styles from './Tooltip.st.css';

/**
 * Next Tooltip
 */
class Tooltip extends React.PureComponent {
  static displayName = 'Tooltip';

  state = { isOpen: false };

  static propTypes = {
    dataHook: PropTypes.string,
    children: PropTypes.node.isRequired,
    content: PropTypes.node,
    appendTo: PropTypes.string,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    placement: PropTypes.string,
  };

  static defaultProps = {
    content: '',
    appendTo: 'parent',
    placement: 'top',
    enterDelay: 200,
    exitDelay: 0,
    onShow: () => ({}),
    onHide: () => ({}),
  };

  open = () => {
    const { onShow } = this.props;
    this.setState({ isOpen: true }, () => onShow());
  };

  close = () => {
    const { onHide } = this.props;
    this.setState({ isOpen: false }, () => onHide());
  };

  onFocus = focus => {
    this.open();
    focus();
  };

  onBlur = blur => {
    this.close();
    blur();
  };

  render() {
    const {
      children,
      content,
      appendTo,
      placement,
      exitDelay,
      enterDelay,
      dataHook,
    } = this.props;
    const { isOpen } = this.state;
    const timeout = { enter: enterDelay, exit: exitDelay };
    return (
      <Popover
        {...styles('root', {}, this.props)}
        dataHook={dataHook}
        placement={placement}
        showArrow
        timeout={timeout}
        shown={isOpen}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        appendTo={appendTo}
      >
        <Popover.Element>
          {React.cloneElement(children, {
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          })}
        </Popover.Element>
        <Popover.Content>{content}</Popover.Content>
      </Popover>
    );
  }
}

export default Tooltip;
