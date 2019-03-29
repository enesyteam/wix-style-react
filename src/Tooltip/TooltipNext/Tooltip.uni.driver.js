import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';
import { textUniDriverFactory } from '../../Text/Text.uni.driver';

export const tooltipDriverFactory = (base, body) => {
  return {
    exists: async () => await testkit(base, body).exists(),
    click: async () => await testkit(base, body).exists(),
    isContentElementExists: async () =>
      await testkit(base, body).isContentElementExists(),
    mouseEnter: async () => await testkit(base, body).mouseEnter(),
    mouseLeave: async () => await testkit(base, body).mouseLeave(),
    getTooltipText: async () => {
      await testkit(base, body).mouseEnter();
      const text = await textUniDriverFactory(
        body.$('[data-hook="tooltip-text"]')
      ).getText();
      // this makes sure that test is cleaning up after
      await testkit(base, body).mouseLeave();
      return text;
    },
  };
};
