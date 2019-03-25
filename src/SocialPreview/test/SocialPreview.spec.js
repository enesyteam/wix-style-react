import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import SocialPreview from '../SocialPreview';
import { socialPreviewPrivateDriverFactory } from './SocialPreview.private.uni.driver';

describe('SocialPreview', () => {
  const createDriver = createUniDriverFactory(
    socialPreviewPrivateDriverFactory,
  );

  it('should render', async () => {
    const driver = createDriver(<SocialPreview />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const driver = createDriver(<SocialPreview />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button 2 times',
    );
  });

  it('should allow changing the button text', async () => {
    const driver = createDriver(<SocialPreview buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
