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

  it('should be hidden by default', async () => {
    const { driver } = render(<Tooltip>{children}</Tooltip>);
    expect(await driver.tooltipExists()).toBe(false);
  });

  describe('Mouse events', () => {
    it('tooltip should be visible on mouse over', async () => {
      const { driver } = render(<Tooltip>{children}</Tooltip>);
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(true);
    });

    it('tooltip should hidden on mouse leave', async () => {
      const { driver } = render(
        <Tooltip content="hello" enterDelay={0}>
          {children}
        </Tooltip>,
      );
      expect(await driver.tooltipExists()).toBe(false);
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(true);
      await driver.mouseLeave();
      expect(await driver.tooltipExists()).toBe(false);
    });
  });

  describe('Keyboard events', () => {
    it('tooltip should be visible on keyboard focus', async () => {
      const { driver } = render(<Tooltip>{children}</Tooltip>);
      await driver.tabIn();
      expect(await driver.tooltipExists()).toBe(true);
    });

    it('tooltip should be hidden on keyboard blur event', async () => {
      const { driver } = render(
        <Tooltip content="hello" enterDelay={0}>
          {children}
        </Tooltip>,
      );
      expect(await driver.tooltipExists()).toBe(false);
      await driver.tabIn();
      expect(await driver.tooltipExists()).toBe(true);
      await driver.tabOut();
      expect(await driver.tooltipExists()).toBe(false);
    });
  });

  describe('`onShow` & `onHide` props', () => {
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

  describe('`content` prop', () => {
    it('should render string inside tooltip element [when] string is given', async () => {
      const onShow = jest.fn();
      const { driver } = render(
        <Tooltip onShow={onShow} content="string">
          {children}
        </Tooltip>,
      );

      expect(await driver.getTooltipText()).toBe('string');
    });
  });
});
