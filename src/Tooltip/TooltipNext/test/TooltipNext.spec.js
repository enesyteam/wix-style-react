import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TooltipNext from '../TooltipNext';
import { tooltipNextPrivateDriverFactory } from './TooltipNext.private.uni.driver';

describe('TooltipNext', () => {
  const render = createRendererWithUniDriver(
    tooltipNextPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<TooltipNext />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<TooltipNext />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button 2 times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<TooltipNext buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
