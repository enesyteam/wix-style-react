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
    /** align tooltip content */
    textAlign: PropTypes.oneOf(['center', 'start']),
    /** tooltips delay on show event */
    enterDelay: PropTypes.number,
    /** tooltips delay on hide event */
    exitDelay: PropTypes.number,
    /** tooltips content relation to a dom element */
    appendTo: PropTypes.oneOf(['window', 'scrollParent', 'viewport', 'parent']),
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
  };

  static defaultProps = {
    content: '',
    appendTo: 'parent',
    placement: 'top',
    showArrow: true,
    enterDelay: 200,
    exitDelay: 0,
    maxWidth: 204,
    textAlign: 'center',
    size: 'medium',
    zIndex: 2000,
  };

  _renderContent = () => {
    const { content, maxWidth, zIndex, textAlign } = this.props;

    const style = { maxWidth: `${maxWidth}px`, zIndex, textAlign };
    const Container = ({ children }) => <div style={style}>{children}</div>;

    const text = (
      <Container>
        <Text dataHook="tooltip-text" size="small" weight="normal" light>
          {content}
        </Text>
      </Container>
    );
    const node = <Container>{content}</Container>;

    return typeof content === 'string' ? text : node;
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
        timeout={{ enter: enterDelay, exit: exitDelay }}
        content={this._renderContent()}
        showArrow
      >
        {children}
      </CoreTooltip>
    );
  }
}

export default Tooltip;
