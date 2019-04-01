jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const options = {
  ComponentName: 'MyNewComponent',
  componentName: 'myNewComponent',
};

defineTest(__dirname, 'src/codemods/stories-file', options, 'stories');

defineTest(__dirname, 'src/codemods/index-file', options, 'index');

defineTest(__dirname, 'src/codemods/testkit-exports', options, 'testkit-index');

defineTest(
  __dirname,
  'src/codemods/testkit-exports',
  options,
  'testkit-enzyme',
);

defineTest(
  __dirname,
  'src/codemods/testkit-exports',
  options,
  'testkit-protractor',
);

defineTest(
  __dirname,
  'src/codemods/testkit-exports',
  options,
  'testkit-puppeteer',
);

defineTest(
  __dirname,
  'src/codemods/testkit-definitions',
  options,
  'testkit-definitions',
);
