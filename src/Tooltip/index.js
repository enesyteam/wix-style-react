import React, { Component } from 'react';
import hoistNonReactMethods from 'hoist-non-react-methods';
import PropTypes from 'prop-types';

import TooltipNew from './TooltipNext';
import TooltipOld from './Tooltip';

class Tooltip extends Component {
  static propTypes = {
    upgrade: PropTypes.bool,
  };
  render() {
    const { upgrade, ...rest } = this.props;
    return upgrade ? <TooltipNew {...rest} /> : <TooltipOld {...rest} />;
  }
}

Tooltip.displayName = 'Tooltip';

export default hoistNonReactMethods(TooltipOld, Tooltip);
