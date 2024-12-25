import path from 'node:path';

import { colors, logger } from '@jpapini/logger';

import type { BuildType, NodeEnv } from '~/enums';
import { findFilePathOrThrow } from '~/utils/find-file-path.util';
import { findProjectRoot } from '~/utils/find-project-root.util';
import { shorternPath } from '~/utils/shortern-path.util';

export type BaseContextOptions<TBuildType extends BuildType = BuildType> = {
    buildType: TBuildType;
    id: string;

    rootDir: string;
    outDir?: string | undefined;
    cacheDir?: string | undefined;

    entryFile: string;

    nodeEnv: NodeEnv;
    envVars?: Record<string, string | undefined> | undefined;

    isProduction: boolean;
    isWatchMode: boolean;
    isDevServer: boolean;

    publicUrl: URL;
};

export abstract class BaseContext<TBuildType extends BuildType = BuildType> {
    protected _buildType: TBuildType;
    protected _id: string;

    protected _projectDir: string;
    protected _rootDir: string;
    protected _outDir: string;
    protected _cacheDir: string;

    protected _pkgJsonFile: string;
    protected _tsconfigFile: string;
    protected _entryFile: string;

    protected _nodeEnv: NodeEnv;
    protected _envVars: Record<string, string | undefined>;

    protected _isProduction: boolean;
    protected _isWatchMode: boolean;
    protected _isDevServer: boolean;

    protected _publicUrl: URL;

    constructor(options: BaseContextOptions<TBuildType>) {
        this._buildType = options.buildType;
        this._id = options.id;

        this._projectDir = findProjectRoot(options.rootDir);
        this._rootDir = options.rootDir;
        this._outDir = path.join(options.rootDir, options.outDir ?? 'dist');
        this._cacheDir = path.join(
            options.rootDir,
            options.cacheDir ?? 'node_modules/.cache/webpack',
        );

        this._pkgJsonFile = findFilePathOrThrow(options.rootDir, 'package.json');
        this._tsconfigFile = findFilePathOrThrow(options.rootDir, 'tsconfig.json');
        this._entryFile = findFilePathOrThrow(options.rootDir, options.entryFile);

        this._nodeEnv = options.nodeEnv;
        this._envVars = options.envVars ?? {};

        this._isProduction = options.isProduction;
        this._isWatchMode = options.isWatchMode;
        this._isDevServer = options.isDevServer;

        this._publicUrl = options.publicUrl;
        this._publicUrl.pathname += this._publicUrl.pathname.endsWith('/') ? '' : '/';
    }

    public get buildType(): TBuildType {
        return this._buildType;
    }
    public get id(): string {
        return this._id;
    }

    public get projectDir(): string {
        return this._projectDir;
    }
    public get rootDir(): string {
        return this._rootDir;
    }
    public get outDir(): string {
        return this._outDir;
    }
    public get cacheDir(): string {
        return this._cacheDir;
    }

    public get pkgJsonFile(): string {
        return this._pkgJsonFile;
    }
    public get tsconfigFile(): string {
        return this._tsconfigFile;
    }
    public get entryFile(): string {
        return this._entryFile;
    }

    public get nodeEnv(): NodeEnv {
        return this._nodeEnv;
    }
    public get envVars(): Record<string, string | undefined> {
        return this._envVars;
    }

    public get isProduction(): boolean {
        return this._isProduction;
    }
    public get isWatchMode(): boolean {
        return this._isWatchMode;
    }
    public get isDevServer(): boolean {
        return this._isDevServer;
    }

    public get publicUrl(): URL {
        return this._publicUrl;
    }

    public print(): void {
        logger.info('ID:', colors.blue(this.id));

        logger.info('Node environment:', colors.blue(this.nodeEnv));
        logger.info('Public URL:', colors.blue(this.publicUrl.toString()));

        logger.info(
            'Production build:',
            this.isProduction ? colors.green('YES') : colors.yellow('NO'),
        );
        logger.info(
            'Watch mode:',
            this.isWatchMode ? colors.green('ENABLED') : colors.yellow('DISABLED'),
        );
        logger.info(
            'Dev server:',
            this.isDevServer ? colors.green('ENABLED') : colors.yellow('DISABLED'),
        );

        logger.info('Project dir:', colors.blue(this.projectDir));
        logger.info('Root dir:', colors.blue(shorternPath(this.rootDir, this.rootDir)));
        logger.info('Output dir:', colors.blue(shorternPath(this.outDir, this.rootDir)));
        logger.info('Cache dir:', colors.blue(shorternPath(this.cacheDir, this.rootDir)));

        logger.info('Manifest file:', colors.blue(shorternPath(this.pkgJsonFile, this.rootDir)));
        logger.info('TSConfig file:', colors.blue(shorternPath(this.tsconfigFile, this.rootDir)));
        logger.info('Entry file:', colors.blue(shorternPath(this.entryFile, this.rootDir)));
    }
}
