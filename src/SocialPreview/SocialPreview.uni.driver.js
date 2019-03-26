import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { imageViewerTestkitFactory as enzymeImageViewerTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

export const socialPreviewDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    /** Get SocialPreview title **/
    getTitle: async () => base.$('[data-hook="socialPreview-title"]').text(),

    /** Get SocialPreview url **/
    getPreviewUrl: async () => base.$('[data-hook="socialPreview-url"]').text(),

    /** Get SocialPreview description **/
    getDescription: async () =>
      base.$('[data-hook="socialPreview-description"]').text(),

    getImageViewer: async () =>
      base.$('[data-hook="socialPreview-imageViewer"]'),
  };
};
