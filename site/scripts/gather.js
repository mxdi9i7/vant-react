/* eslint-disable */
const { resolve, relative } = require('path');

// fs.exists is deprecated, but sync version is still available in Node v8.8.1, so I use it.
const {
  readdirSync,
  writeFileSync,
} = require('fs');

const {
  __,
  concat,
  curry,
  filter,
  find,
  forEach,
  map,
  merge,
  omit,
  pipe,
  prop,
  propEq,
} = require('ramda');
const fm = require('front-matter');

const componentsSrc = resolve(__dirname, '../../src/components');


const isDir = path => {
  try {
    readdirSync(path);
  } catch (e) {
    return false;
  }
  return true;
};

function gather() {
  const components = readdirSync(componentsSrc);

  const demoConfig = {};

  components.forEach(item => {
    demoConfig[item.toLowerCase()] = `DemoLoadable({ loader: () => import('../../src/components/${item}') })`;
  })

  console.log(JSON.stringify(demoConfig))

  writeFileSync(
    resolve(__dirname, '../configs/demo.config.js'),
    `
import DemoLoadable from '../src/desktop/components/Loadable';

export default ${JSON.stringify(demoConfig)};
    `.replace(/\"(DemoLoadable\(\{.+\}\))\"/g, `$1`));
  }

gather();
