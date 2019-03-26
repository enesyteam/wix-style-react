import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import SocialPreview from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SocialPreview',

  component: SocialPreview,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    title: 'Site Name | a title of your site',
    description: 'A short description for a site',
    previewUrl: 'www.site-name.com',
  },

  exampleProps: {
    title: 'Site Name | a title of your site',
    description: 'A short description for a site',
    previewUrl: 'www.site-name.com',
    imageViewerProps: {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg',
    },
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SocialPreview/',
      component: <SocialPreview />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'A displayer for social post.',
            }),
          ]),

          columns([
            importExample(
              "import SocialPreview from 'wix-style-react/SocialPreview'",
            ),
          ]),

          divider(),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: `<SocialPreview title='Site Name | a title of you site'
    description='A short description for a site' previewUrl='www.site-name.com' imageViewerProps={{imageUrl:'https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg'}}/>;`,
          }),
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
