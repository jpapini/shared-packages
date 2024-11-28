#!/usr/bin/env node
// @ts-check
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

import resolveBin from 'resolve-bin';

const require = createRequire(import.meta.url);
const bin = resolveBin.sync('@commitlint/cli', { executable: 'commitlint' });
const config = require.resolve('@jpapini/commitlint-config');

const result = spawnSync(bin, ['--edit', process.argv[2], '--config', config], {
    stdio: 'inherit',
});

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === null) process.exit(1);
process.exit(result.status);
