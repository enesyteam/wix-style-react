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
import IconButton from '../../../IconButton';
import More from '../../../new-icons/More';

export default {
  category: storySettings.category,
  storyName: 'Tooltip',

  component: Tooltip,
  componentPath: '..',

  componentProps: {
    children: (
      <Tooltip content="HERE I AM! THIS IS ME!">
        <IconButton>
          <More />
        </IconButton>
      </Tooltip>
    ),

    content: 'HERE I AM! THIS IS ME!',
    appendTo: 'parent',
    placement: 'top',
    enterDelay: 200,
    exitDelay: 0,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/TooltipNext/',
      component: (
        <Tooltip appendTo="window" content="HERE I AM! THIS IS ME!">
          <IconButton>
            <More />
          </IconButton>
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
