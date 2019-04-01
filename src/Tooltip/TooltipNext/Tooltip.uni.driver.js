import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';
import { textUniDriverFactory } from '../../Text/Text.uni.driver';

export const tooltipDriverFactory = (base, body) => {
  return {
    /** returns true if trigger element exists on the DOM */
    exists: async () => await testkit(base, body).exists(),
    /** returns true if tooltip element exists on the DOM */
    tooltipExists: async () =>
      await testkit(base, body).isContentElementExists(),
    /** mouse over the target element */
    mouseEnter: async () => await testkit(base, body).mouseEnter(),
    /** mouse leaves the target element */
    mouseLeave: async () => await testkit(base, body).mouseLeave(),
    /** returns tooltips content value in string */
    getTooltipText: async () => {
      await testkit(base, body).mouseEnter();
      const text = await textUniDriverFactory(
        body.$('[data-hook="tooltip-text"]'),
      ).getText();
      // this makes sure that test is cleaning up after
      await testkit(base, body).mouseLeave();
      return text;
    },
  };
};
