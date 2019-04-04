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

  static propTypes = {
    /** applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,
    /** tooltip trigger element. Can be either string or renderable node */
    children: PropTypes.node.isRequired,
    /** tooltip content. Can be either string or renderable node */
    content: PropTypes.node,
    /** align tooltip content */
    textAlign: PropTypes.oneOf(['center', 'start']),
    /** time in milliseconds to wait before showing the tooltip. Defaults to 200. */
    enterDelay: PropTypes.number,
    /**  time in milliseconds to wait before hiding the tooltip. Defaults to 0. */
    exitDelay: PropTypes.number,
    /** tooltips content relation to a dom element */
    appendTo: PropTypes.oneOf(['window', 'scrollParent', 'viewport', 'parent']),
    /** whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
    flip: PropTypes.bool,
    /** whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
    fixed: PropTypes.bool,
    /** tooltip content container width in pixels */
    maxWidth: PropTypes.number,
    /** callback on tooltips content show event */
    onShow: PropTypes.func,
    /** callback on tooltips content hide event */
    onHide: PropTypes.func,
    /** tooltip content placement in relation to target element */
    placement: PropTypes.string,
    /** sets size of the tooltip */
    size: PropTypes.oneOf(['small', 'medium']),
    /** set different zIndex */
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    content: '',
    appendTo: 'parent',
    placement: 'top',
    enterDelay: 200,
    exitDelay: 0,
    maxWidth: 204,
    flip: true,
    fixed: false,
    textAlign: 'center',
    size: 'medium',
    zIndex: 6000,
  };

  _renderContent = () => {
    const { content, maxWidth, zIndex, textAlign } = this.props;

    return (
      <div style={{ maxWidth, zIndex, textAlign }}>
        {typeof content === 'string' ? (
          <Text dataHook="tooltip-text" size="small" weight="normal" light>
            {content}
          </Text>
        ) : (
          content
        )}
      </div>
    );
  };

  render() {
    const {
      exitDelay,
      enterDelay,
      children,
      content,
      maxWidth,
      size,
      ...rest
    } = this.props;
    return (
      <CoreTooltip
        {...rest}
        {...styles('root', { size }, this.props)}
        content={this._renderContent()}
        hideDelay={exitDelay}
        showDelay={enterDelay}
        showArrow
      >
        {children}
      </CoreTooltip>
    );
  }
}

export default Tooltip;
