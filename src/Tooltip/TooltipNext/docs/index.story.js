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
  importExample,
  divider,
  code,
  title,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import Tooltip from '..';
import TextButton from '../../../TextButton';

import { baseScope } from '../../../../stories/utils/LiveCodeExample';
import usage from '!raw-loader!./Usage.md';
import * as examples from './examples';

const liveCode = config =>
  code({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.category,
  storyName: 'Tooltip',

  component: Tooltip,
  componentPath: '..',

  componentProps: {
    children: <TextButton skin="dark">Hover me</TextButton>,
    content: 'Enter your postal code, so postman can easier send you a mail.',
    appendTo: 'window',
    placement: 'top',
    showArrow: true,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/TooltipNext/',
      component: (
        <Tooltip appendTo="window" content="HERE I AM! THIS IS ME!">
          <TextButton skin="dark">Hover me</TextButton>
        </Tooltip>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              text:
                'A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
            }),
          ]),

          importExample({
            source: "import Tooltip from 'wix-style-react/Tooltip';",
          }),

          divider(),

          columns([
            description({
              title: 'Usage',
              text: usage,
            }),
          ]),

          columns([
            code({
              title: 'Basic example',
              interactive: false,
              source: examples.simple,
            }),
          ]),
          divider(),

          title('Examples'),

          ...[
            {
              title: 'Plain Example',
              text: 'Bla bla bla',
              source: examples.basic,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit({ unidriver: true })] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
