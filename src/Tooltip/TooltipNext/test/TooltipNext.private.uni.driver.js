import { tooltipNextDriverFactory as publicDriverFactory } from '../TooltipNext.uni.driver';

export const tooltipNextPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
