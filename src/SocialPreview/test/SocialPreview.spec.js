import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { imageViewerTestkitFactory as enzymeImageViewerTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';

import SocialPreview from '../SocialPreview';
import { socialPreviewPrivateDriverFactory } from './SocialPreview.private.uni.driver';

describe('SocialPreview', () => {
  const createDriver = createUniDriverFactory(
    socialPreviewPrivateDriverFactory,
  );

  it('should render with default values', async () => {
    const driver = createDriver(<SocialPreview />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getTitle()).toEqual('Click me!');
    expect(await driver.getPreviewUrl()).toEqual('WWW.SITE-NAME.COM');
    expect(await driver.getDescription()).toEqual(
      'A description for the displayed item',
    );
  });

  it('should override with default values', async () => {
    const props = {
      title: 'social-preview',
      previewUrl: 'SOCIAL-PREVIEW.COM',
      description: 'a social preview test',
    };
    const driver = createDriver(<SocialPreview {...props} />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getTitle()).toEqual('social-preview');
    expect(await driver.getPreviewUrl()).toEqual('SOCIAL-PREVIEW.COM');
    expect(await driver.getDescription()).toEqual('a social preview test');
  });

  it('should transfer props to imageViewer', async () => {
    const dataHook = 'myDataHook';
    const wrapper = mount(
      <div>
        <SocialPreview dataHook={dataHook} imageViewerProps={{imageUrl:'www.image-url.com'}} />
      </div>,
    );
    const testkit = enzymeImageViewerTestkitFactory({ wrapper, dataHook: 'socialPreview-imageViewer' });
    expect(testkit.exists()).toBeTruthy();
    expect(testkit.getImageUrl()).toEqual('www.image-url.com')
  });
});
