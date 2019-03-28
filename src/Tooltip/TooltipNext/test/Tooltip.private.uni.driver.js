import { tooltipDriverFactory as publicDriverFactory } from '../Tooltip.uni.driver';
import { Simulate } from 'react-dom/test-utils';
import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';

export const tooltipPrivateDriverFactory = base => {
  const fireKeyDown = () => window.dispatchEvent(new window.Event('keydown'));
  const fireKeyUp = () => window.dispatchEvent(new window.Event('keyup'));
  const focus = async () => {
    fireKeyDown();
    Simulate.focus((await testkit(base).getTargetElement()).children[0]);
    fireKeyUp();
  };
  const blur = async () => {
    fireKeyDown();
    Simulate.blur((await testkit(base).getTargetElement()).children[0]);
    fireKeyUp();
  };

  return {
    ...publicDriverFactory(base),
    tabIn: async () => await focus(),
    tabOut: async () => await blur(),
  };
};
