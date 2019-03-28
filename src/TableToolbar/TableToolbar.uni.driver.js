import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const tableToolbarUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    getByDataHook: async dataHook => {
      const element = base.$(`[data-hook=${dataHook}]`);
      if (!(await element.exists())) {
        return false;
      }
      return element;
    },
  };
};
