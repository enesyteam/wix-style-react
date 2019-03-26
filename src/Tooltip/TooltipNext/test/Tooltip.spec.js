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

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <Tooltip>
        <Button>content</Button>
      </Tooltip>,
    );
    expect(await driver.exists()).toBeTruthy();
  });
});
