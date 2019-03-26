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

  render() {
    const { children, content, appendTo, placement, dataHook } = this.props;
    const { isOpen } = this.state;

    return (
      <Popover
        {...styles('root', {}, this.props)}
        dataHook={dataHook}
        placement={placement}
        showArrow
        shown={isOpen}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        appendTo={appendTo}
      >
        <Popover.Element>{children}</Popover.Element>
        <Popover.Content>{content}</Popover.Content>
      </Popover>
    );
  }
}

export default Tooltip;
