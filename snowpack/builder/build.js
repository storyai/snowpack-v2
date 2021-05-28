// @ts-check
const timed = require('./timed');
const timeStart = timed();
const path = require('path');
const log = require('./logger')('[builder/build.js]');
const {globSync} = require('./glob');
//
const esbuild = require('esbuild');
const {unlinkSync} = require('fs');

/** @param {string} fromDir */
const dir = (fromDir) => path.resolve(__dirname, '..', fromDir);

// clean
const timeClean = timed();
globSync(dir('out/**/*')).forEach((filePath) => unlinkSync(filePath));
log(`🧹 Cleaned old build in ${timeClean()}.`);

// build
const timeEsbuild = timed();
esbuild.buildSync({
  bundle: false,
  tsconfig: dir('tsconfig.json'),
  entryPoints: globSync(dir('src/**/*.ts')),
  outdir: dir('lib'),
  platform: 'node',
  sourcemap: 'external',
  format: 'cjs',
  target: ['node12'],
  // define: {
  //   __dirname: JSON.stringify(dir('.')),
  // },
});

log(`🛠  esbuild completed in ${timeEsbuild()}.`);
log(`✨ build.js done in ${timeStart()}.`);
