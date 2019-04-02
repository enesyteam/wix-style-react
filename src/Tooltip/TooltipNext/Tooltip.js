import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip as CoreTooltip } from 'wix-ui-core/tooltip';
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
  };

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

  render() {
    const {
      exitDelay,
      enterDelay,
      children,
      content,
      maxWidth,
      ...rest
    } = this.props;
    return (
      <CoreTooltip
        {...rest}
        {...styles('root', {}, this.props)}
        timeout={{ enter: enterDelay, exit: exitDelay }}
        content={this.renderContent()}
      >
        {children}
      </CoreTooltip>
    );
  }
}

export default Tooltip;
