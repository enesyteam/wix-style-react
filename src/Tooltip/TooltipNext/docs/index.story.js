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
import Text from '../../../Text';
import AddItem from '../../../AddItem';

import { placements } from '../../../Popover/Popover';
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
    children: <TextButton>Hover me</TextButton>,
    content: 'Enter your postal code, so postman can easier send you a mail.',
    appendTo: 'window',
    placement: 'top',
    textAlign: 'center',
    size: 'medium',
  },

  exampleProps: {
    appendTo: ['window', 'scrollParent', 'viewport', 'parent'],
    textAlign: ['start', 'center'],
    size: ['small', 'medium'],
    placement: placements,
    children: [
      {
        label: `TextButton`,
        value: <TextButton>Hover me</TextButton>,
      },
      {
        label: `Text`,
        value: <Text>Long story short</Text>,
      },
      {
        label: `AddItem`,
        value: <AddItem>Hover me</AddItem>,
      },
    ],
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
              text: 'Plain example of how to use tooltip.',
              source: examples.basic,
            },
            {
              title: 'Placement',
              text:
                'Tooltips have four standard placements available: `top`, `right`, `bottom`, and `left`. Each standard position center-aligns itself along the appropriate axis and appears outside the target element.',
              source: examples.placements,
            },
            {
              title: 'Delay',
              text:
                'Time in milliseconds to wait before showing or hiding the tooltip. Controlled by props `enterDelay` or `exitDelay`.',
              source: examples.delay,
            },
            {
              title: 'Size',
              text: 'Tooltip supports two sizes: `small` and `medium`.',
              source: examples.size,
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
