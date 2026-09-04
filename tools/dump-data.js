/* Loads the browser data files in a fake window and dumps JSON to stdout.
   Used by validate-teks.py and check-links.py so the validators read exactly
   what the kiosk reads. Run: node tools/dump-data.js > tools/_data.json */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const files = [
  'data/teks-index.js',
  'data/apps.js',
  'data/resources.js',
  'data/concepts-early.js',
  'data/concepts-math-elementary.js',
  'data/concepts-math-middle.js',
  'data/concepts-reading.js',
  'data/concepts-language.js',
  'data/concepts-writing.js',
  'data/concepts-vocabulary.js'
];

const sandbox = { window: {} };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

for (const f of files) {
  const code = fs.readFileSync(path.join(root, f), 'utf8');
  try {
    vm.runInContext(code, sandbox, { filename: f });
  } catch (e) {
    console.error('SYNTAX ERROR in ' + f + ': ' + e.message);
    process.exit(1);
  }
}

process.stdout.write(JSON.stringify({
  TEKS: sandbox.window.TEKS,
  APPS: sandbox.window.APPS,
  RESOURCES: sandbox.window.RESOURCES,
  CONCEPTS: sandbox.window.CONCEPTS
}));
