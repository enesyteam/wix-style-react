import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  columns,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import Tooltip from '..';
import Button from '../../../Button';

export default {
  category: storySettings.category,
  storyName: 'Tooltip',

  component: Tooltip,
  componentPath: '..',

  componentProps: {
    children: <Button>Hover me for a tooltip!</Button>,
    content: 'HERE I AM! THIS IS ME!',
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/TooltipNext/',
      component: (
        <Tooltip content="HERE I AM! THIS IS ME!">
          <Button>Hover me!</Button>
        </Tooltip>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Tooltip',
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
