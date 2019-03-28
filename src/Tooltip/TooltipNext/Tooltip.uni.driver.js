import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';

export const tooltipDriverFactory = (base, body) => {
  return {
    exists: async () => await testkit(base, body).exists(),
    click: async () => await testkit(base, body).exists(),
    isContentElementExists: async () =>
      await testkit(base, body).isContentElementExists(),
    mouseEnter: async () => await testkit(base, body).mouseEnter(),
    mouseLeave: async () => await testkit(base, body).mouseLeave(),
  };
};
