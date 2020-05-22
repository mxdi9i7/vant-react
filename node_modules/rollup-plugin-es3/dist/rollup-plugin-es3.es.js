import MagicString from 'magic-string';

// Make rollup compatible with ES3, remove Object.defineProperty of __esModule part
function es3 ({ remove, sourceMap, sourcemap } = {}) {
  const removeHash = {
    'defineProperty': [/^\s*Object\.defineProperty\(\s*exports,\s*'__esModule'.*\n$/mg, ''],
    'freeze': [/Object.freeze\s*\(\s*([^)]*)\)/g, '$1']
  }
  if (!Array.isArray(remove)) remove = Object.keys(removeHash)

  return {
    name: 'es3',
    transformBundle: function (code) {
      const magicString = new MagicString(code);
      for (let k in removeHash) {
        if (remove.indexOf(k) > -1) {
          const [pattern, value = ''] = removeHash[k];
          let match, start, end, replacement;

          while ((match = pattern.exec(code))) {
            start       = match.index;
            end         = start + match[0].length;
            replacement = value.toString();
            for (let i = 1; i < match.length; i++) {
              replacement = replacement.replace(`$${i}`, match[i]);
            }
            magicString.overwrite(start, end, replacement);
          }
        }
      }
      return {
        code: magicString.toString(),
        map:  (sourceMap !== false && sourcemap !== false) ?
          magicString.generateMap({ hires: true }) : { mappings: '' }
      }
    }
  }
}

export default es3;