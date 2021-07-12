const glob = require('fast-glob');
const path = require('path');
const { existsSync, readdirSync } = require('fs-extra');
const { SRC_DIR, DOCS_DIR, SITE_DESKTOP_SHARED_FILE } = require('./constants');
const { join, normalize } = require('path');
const configs = require('../configs/nav.config');
const { pascalize, normalizePath, smartOutputFile } = require('./utils');

function formatName(component, lang) {
  component = pascalize(component);

  if (lang) {
    return `${component}_${lang.replace('-', '_')}`;
  }

  return component;
}

function resolveDocuments(components) {
  const docs = [];

  const langs = Object.keys(configs);

  langs.forEach(lang => {
    const fileName = `README.${lang}.md`;
    components.forEach(component => {
      docs.push({
        name: formatName(component, lang),
        path: join(SRC_DIR, component, fileName),
      })
    })
    
  })

  const staticDocs = glob.sync(normalizePath(path.join(DOCS_DIR, '**/*.md'))).map(p => {
    const pairs = path.parse(p).name.split('.');
    return {
      name: formatName(pairs[0], pairs[1] || 'zh-CN'),
      path: p,
    }
  });

  return [
    ...staticDocs,
    ...docs.filter(item => existsSync(item.path))
  ]
}

function genImports(documents) {
  return documents.map(item => `import ${item.name} from '${normalizePath(item.path)}';`).join('\n');
}

function genExport(documents) {
  return `export const documents = {
  ${documents.map(item => item.name).join(',\n  ')}
};`
}

function genSiteDesktopShared() {
  const dirs = readdirSync(SRC_DIR);
  const documents = resolveDocuments(dirs);
  const code = `${genImports(documents)}
${genExport(documents)}
`;
  smartOutputFile(SITE_DESKTOP_SHARED_FILE, code);
}

module.exports = genSiteDesktopShared;
