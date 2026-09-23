#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Runs every tests/*-test.js in its own Node process and stops at the first
 * failure. Written in Node rather than as a shell loop in package.json so that
 * `npm test` behaves the same under cmd.exe and PowerShell as it does under
 * sh. Pass -v to see each suite's own output.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const dir = path.join(__dirname, '..', 'tests');
const verbose = process.argv.includes('-v');
const suites = fs.readdirSync(dir).filter((f) => f.endsWith('-test.js')).sort();

for (const f of suites) {
  const run = spawnSync(process.execPath, [path.join(dir, f)], { encoding: 'utf8' });
  if (verbose || run.status !== 0) process.stdout.write(run.stdout + run.stderr);
  if (run.status !== 0) {
    console.error(`FAILED: tests/${f}`);
    process.exit(1);
  }
}
console.log(`All tests passed (${suites.length} suites)`);
