import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';

export const tooltipDriverFactory = (base, body) => {
  const {
    exists,
    click,
    isContentElementExists,
    mouseEnter,
    mouseLeave,
  } = testkit(base, body);
  return {
    exists,
    click,
    isContentElementExists,
    mouseEnter,
    mouseLeave,
  };
};
