import React, { Component } from 'react';
import hoistNonReactMethods from 'hoist-non-react-methods';
import PropTypes from 'prop-types';

import TooltipNew from './TooltipNext';
import TooltipOld from './Tooltip';

const upgradeHOC = Old => {
  class UpgradeTooltip extends React.Component {
    static displayName = 'Tooltip';

    static propTypes = {
      upgrade: PropTypes.bool,
    };

    wrappedComponentRef = null;

    static defaultProps = Component.defaultProps;

    render() {
      const { upgrade, ...rest } = this.props;
      const reference = ref => (this.wrappedComponentRef = ref);
      return upgrade ? (
        <TooltipNew {...rest} ref={reference} />
      ) : (
        <Old {...rest} ref={reference} />
      );
    }
  }

  return hoistNonReactMethods(UpgradeTooltip, Old, {
    delegateTo: c => c.wrappedComponentRef,
    hoistStatics: true,
  });
};

export default upgradeHOC(TooltipOld);
