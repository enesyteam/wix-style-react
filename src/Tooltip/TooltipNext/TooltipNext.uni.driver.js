import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const tooltipNextDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () => base.$('[data-hook="tooltipNext-count"]').text(),

    /** Click the button */
    clickButton: async () => base.$('[data-hook="tooltipNext-button"]').click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$('[data-hook="tooltipNext-button"]').text(),
  };
};
