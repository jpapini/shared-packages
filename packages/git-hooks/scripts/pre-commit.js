#!/usr/bin/env node
// @ts-check
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

import resolveBin from 'resolve-bin';

const require = createRequire(import.meta.url);
const bin = resolveBin.sync('lint-staged', { executable: 'lint-staged' });
const config = require.resolve('@jpapini/lint-staged-config');

const result = spawnSync(bin, ['--config', config], { stdio: 'inherit' });

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === null) process.exit(1);
process.exit(result.status);
