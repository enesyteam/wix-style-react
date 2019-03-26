import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import Button from '../../Button';

/**
 * Next Tooltip
 */
class Tooltip extends React.PureComponent {
  static displayName = 'Tooltip';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Text for the button */
    buttonText: PropTypes.string,
  };

  static defaultProps = {
    buttonText: 'Click me!',
  };

  state = {
    count: 0,
  };

  _handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { dataHook, buttonText } = this.props;

    return (
      <div data-hook={dataHook}>
        <Text dataHook="tooltipNext-count">
          You clicked this button {count} times
        </Text>

        <div>
          <Button onClick={this._handleClick} dataHook="tooltipNext-button">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default Tooltip;
