import React from 'react';
import PropTypes from 'prop-types';

import { Popover } from 'wix-ui-core/popover';
import styles from './Tooltip.st.css';

/**
 * Next Tooltip
 */
class Tooltip extends React.PureComponent {
  static displayName = 'Tooltip';

  static propTypes = {
    dataHook: PropTypes.string,
    children: PropTypes.node.isRequired,
    content: PropTypes.node,
  };

  static defaultProps = {
    content: '',
  };

  render() {
    const { children, content, ...rest } = this.props;

    return (
      <Popover {...rest} {...styles('root', {}, this.props)}>
        <Popover.Element>{children}</Popover.Element>
        <Popover.Content>{content}</Popover.Content>
      </Popover>
    );
  }
}

export default Tooltip;
