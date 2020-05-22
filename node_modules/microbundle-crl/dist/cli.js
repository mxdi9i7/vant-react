#!/usr/bin/env node
function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var microbundle = _interopDefault(require('./microbundle.js'));
var sade = _interopDefault(require('sade'));
var fs = _interopDefault(require('fs'));
var es6Promisify = require('es6-promisify');
var kleur = require('kleur');

let {
  version
} = require('../package');

const toArray = val => Array.isArray(val) ? val : val == null ? [] : [val];

var prog = (handler => {
  const ENABLE_MODERN = process.env.MICROBUNDLE_MODERN !== 'false';
  const DEFAULT_FORMATS = ENABLE_MODERN ? 'modern,es,cjs,umd' : 'es,cjs,umd';

  const cmd = type => (str, opts) => {
    opts.watch = opts.watch || type === 'watch';
    opts.compress = opts.compress != null ? opts.compress : opts.target !== 'node';
    opts.entries = toArray(str || opts.entry).concat(opts._);
    handler(opts);
  };

  let prog = sade('microbundle');
  prog.version(version).option('--entry, -i', 'Entry module(s)').option('--output, -o', 'Directory to place build files into').option('--format, -f', 'Only build specified formats', DEFAULT_FORMATS).option('--watch, -w', 'Rebuilds on any change', false).option('--target', 'Specify your target environment (node or web)', 'web').option('--external', `Specify external dependencies, or 'none'`).option('--globals', `Specify globals dependencies, or 'none'`).example('microbundle --globals react=React,jquery=$').option('--define', 'Replace constants with hard-coded values').example('microbundle --define API_KEY=1234').option('--alias', `Map imports to different modules`).example('microbundle --alias react=preact').option('--compress', 'Compress output using Terser', null).option('--strict', 'Enforce undefined global context and add "use strict"').option('--name', 'Specify name exposed in UMD builds').option('--cwd', 'Use an alternative working directory', '.').option('--sourcemap', 'Generate source map', true).option('--css-modules', 'Turns on css-modules for all .css imports. Passing a string will override the scopeName. eg --css-modules="_[hash]"', null).example("microbundle --no-sourcemap # don't generate sourcemaps").option('--raw', 'Show raw byte size', false).option('--jsx', 'A custom JSX pragma (default React.createElement)').option('--tsconfig', 'Specify the path to a custom tsconfig.json').example('microbundle build --tsconfig tsconfig.build.json');
  prog.command('build [...entries]', '', {
    default: true
  }).describe('Build once and exit').action(cmd('build'));
  prog.command('watch [...entries]').describe('Rebuilds on any change').action(cmd('watch'));
  return argv => prog.parse(argv, {
    alias: {
      o: ['output', 'd'],
      i: ['entry', 'entries', 'e'],
      w: ['watch']
    }
  });
});

const readFile = es6Promisify.promisify(fs.readFile);
const stat = es6Promisify.promisify(fs.stat);
const stdout = console.log.bind(console);
const stderr = console.error.bind(console);

function logError (err) {
  const error = err.error || err;
  const description = `${error.name ? error.name + ': ' : ''}${error.message || error}`;
  const message = error.plugin ? `(${error.plugin} plugin) ${description}` : description;
  stderr(kleur.red().bold(message));

  if (error.loc) {
    stderr();
    stderr(`at ${error.loc.file}:${error.loc.line}:${error.loc.column}`);
  }

  if (error.frame) {
    stderr();
    stderr(kleur.dim(error.frame));
  } else if (err.stack) {
    const headlessStack = error.stack.replace(message, '');
    stderr(kleur.dim(headlessStack));
  }

  stderr();
}

const run = opts => {
  microbundle(opts).then(output => {
    if (output != null) stdout(output);
    if (!opts.watch) process.exit(0);
  }).catch(err => {
    process.exitCode = typeof err.code === 'number' && err.code || 1;
    logError(err);
    process.exit();
  });
};

prog(run)(process.argv);
//# sourceMappingURL=cli.js.map
