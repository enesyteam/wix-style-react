import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';

export const tooltipDriverFactory = (base, body) => {
  const { exists, click } = testkit(base, body);
  return {
    exists: () => exists(),
    click: () => click(),
  };
};
