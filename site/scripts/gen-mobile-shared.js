const path = require('path');
const { existsSync, readdirSync, readFileSync, outputFileSync } = require('fs-extra');
const configs = require('../configs/nav.config');
const { SRC_DIR, SITE_MOBILE_SHARED_FILE } = require('./constants');


const camelizeRE = /-(\w)/g;
const pascalizeRE = /(\w)(\w*)/g;

function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

function pascalize(str) {
  return camelize(str).replace(
    pascalizeRE,
    (_, c1, c2) => c1.toUpperCase() + c2
  );
}

function normalizePath(path) {
  return path.replace(/\\/g, '/');
}

function decamelize(str, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase();
}

function removeExt(path) {
  return path.replace('.tsx', '');
}

function smartOutputFile(filePath, content) {
  if (existsSync(filePath)) {
    const previousContent = readFileSync(filePath, 'utf-8');

    if (previousContent === content) {
      return;
    }
  }

  outputFileSync(filePath, content);
}

function genImports(demos) {
  return demos.map(item => `import ${item.name} from '${removeExt(normalizePath(item.path))}';`).join('\n');
}

function genExports(demos) {
  return `export const demos = {\n  ${demos
    .map(item => item.name)
    .join(',\n  ')}\n};`;
}

function genConfigs(demos) {
  const demoNames = demos.map(item => decamelize(item.name));

  function demoFilter(nav) {
    return nav.filter(group => {
      group.list = group.list.filter((item) =>
        demoNames.includes(item.path)
      );
      return group.list.length;
    });
  }
  Object.keys(configs).forEach(lang => {
    if (configs[lang].nav) {
      configs[lang].nav = demoFilter(configs[lang].nav)
    }
  })

  return `export const config = ${JSON.stringify(configs, null, 2)}`;
}

function genCode(components) {
  const demos = components.map(component => ({
    component,
    name: pascalize(component),
    path: path.join(SRC_DIR, component, 'demo/index.tsx')
  })).filter(item => existsSync(item.path));
  return `${genImports(demos)}
  ${genExports(demos)}
  ${genConfigs(demos)}
  `;
}

function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
  const code = genCode(dirs);

  smartOutputFile(SITE_MOBILE_SHARED_FILE, code);
}

module.exports = genSiteMobileShared;