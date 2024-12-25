#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import dotenv from 'dotenv';
import resolveBin from 'resolve-bin';

['.env']
    .map((name) => path.join(process.cwd(), name))
    .filter((p) => fs.existsSync(p))
    .forEach((p) => void dotenv.config({ path: p }));

const publicUrl = new URL(process.env.PUBLIC_URL || 'http://localhost:3000/');

spawnSync(
    resolveBin.sync('http-server', { executable: 'http-server' }),
    [
        ...process.argv.slice(2),
        '-a',
        publicUrl.hostname,
        '-p',
        publicUrl.port,
        '-c-1',
        '--gzip',
        '--cors',
    ],
    {
        cwd: process.cwd(),
        env: process.env,
        stdio: 'inherit',
    },
);
