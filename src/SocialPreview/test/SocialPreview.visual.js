import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialPreview from '..';

const defaultProps = {
  title: 'Click me!',
  description: 'A description for the displayed item',
  previewUrl: 'www.site-name.com',
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: {},
      },
    ],
  },
  {
    describe: 'text',
    its: [
      {
        it: 'long text',
        props: {
          title:
            'Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!Click me!',
          description:
            'a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site',
          previewUrl:
            'www.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.comwww.site-name.com',
        },
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentWrapper }) => {
    storiesOf(`SocialPreview/${describe}`, module).add(it, () => {
      const component = <SocialPreview {...defaultProps} {...props} />;
      const ComponentWrapper = componentWrapper;
      return ComponentWrapper ? (
        <ComponentWrapper>{component}</ComponentWrapper>
      ) : (
        component
      );
    });
  });
});
