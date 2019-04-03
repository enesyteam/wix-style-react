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

  describe('`content` prop', () => {
    it('should render string inside tooltip element [when] string is given', async () => {
      const onShow = jest.fn();
      const { driver } = render(
        <Tooltip onShow={onShow} content="string">
          {children}
        </Tooltip>
      );

      expect(await driver.getTooltipText()).toBe('string');
    });
  });
});
