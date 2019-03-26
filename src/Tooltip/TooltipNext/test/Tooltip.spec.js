import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/unit';

import Tooltip from '../Tooltip';
import { tooltipPrivateDriverFactory } from './Tooltip.private.uni.driver';

import Button from '../../../Button';

describe('Tooltip', () => {
  const render = createRendererWithUniDriver(tooltipPrivateDriverFactory);

  const children = <Button>content</Button>;

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Tooltip>{children}</Tooltip>);
    expect(await driver.exists()).toBeTruthy();
  });

  it('should be hidden by default', async () => {
    const { driver } = render(<Tooltip>{children}</Tooltip>);
    expect(await driver.isContentElementExists()).toBe(false);
  });

  it('should be visible on hover', async () => {
    const { driver } = render(<Tooltip>{children}</Tooltip>);
    await driver.mouseEnter();
    expect(await driver.isContentElementExists()).toBe(true);
  });

  it('should hide on mouse leave', async () => {
    const { driver } = render(<Tooltip>{children}</Tooltip>);
    await driver.mouseEnter();
    expect(await driver.isContentElementExists()).toBe(true);
    await driver.mouseLeave();
    expect(await driver.isContentElementExists()).toBe(false);
  });

  it('should call onShow on mouse enter', async () => {
    const onShow = jest.fn();
    const { driver } = render(<Tooltip onShow={onShow}>{children}</Tooltip>);
    await driver.mouseEnter();
    expect(onShow).toHaveBeenCalled();
  });

  it('should call onHide on mouse leave', async () => {
    const onHide = jest.fn();
    const { driver } = render(<Tooltip onHide={onHide}>{children}</Tooltip>);
    await driver.mouseEnter();
    await driver.mouseLeave();
    expect(onHide).toHaveBeenCalled();
  });
});
