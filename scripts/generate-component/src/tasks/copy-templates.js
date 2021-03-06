const fs = require('fs');
const path = require('path');

const utils = require('../utils');
const replaceTemplates = require('../replace-templates');
const createValuesMap = require('../create-values-map');

const templateNamePlaceholder = 'Component';

const pathExists = path =>
  new Promise(resolve => {
    fs.access(path, fs.constants.F_OK, err => {
      resolve(!err);
    });
  });

const copyTemplates = async ({ answers = {} } = {}) => {
  if (!answers.ComponentName) {
    throw new Error('Component name must be provided!');
  }

  const templatesPath = path.join(
    __dirname,
    '..',
    '..',
    'templates',
    'component',
  );
  const destPath = utils.getProjectRoot();

  const readdir = entry =>
    fs.readdirSync(entry).map(dir => path.join(entry, dir));

  const queue = readdir(templatesPath);

  while (queue.length) {
    const itemPath = queue.shift();

    const isDir = fs.lstatSync(itemPath).isDirectory();

    const newDestPath = path
      .join(destPath, itemPath.replace(templatesPath, ''))
      .replace(
        new RegExp(`${templateNamePlaceholder}`, 'g'),
        answers.ComponentName,
      );

    if (isDir) {
      queue.push(...readdir(path.join(itemPath)));

      if (!(await pathExists(newDestPath))) {
        fs.mkdirSync(newDestPath);
      }
    } else {
      if (!(await pathExists(newDestPath))) {
        const replaced = replaceTemplates(
          fs.readFileSync(itemPath, 'utf8'),
          createValuesMap(answers),
        );
        fs.writeFileSync(newDestPath, replaced, 'utf8');
      }
    }
  }
};

module.exports = copyTemplates;
