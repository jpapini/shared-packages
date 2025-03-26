import path from 'node:path';

import { transformer, declarationTransformer } from '@deepkit/type-compiler';
import * as ts from 'typescript';
import type { CompilerOptions } from 'typescript';
import type { UnpluginFactory } from 'unplugin';
import { createUnplugin } from 'unplugin';
import { createFilter } from 'unplugin-utils';

import type { Options } from './types';

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
    const filter = createFilter(
        options.include ?? /\.(?:m|c)?tsx?$/u,
        options.exclude ?? 'node_modules/**',
    );

    const transformers = options.transformers ?? {
        before: [transformer],
        after: [declarationTransformer],
    };

    const configFilePath = options.tsConfig ?? path.resolve('tsconfig.json');
    const tsConfig = ts.readConfigFile(
        configFilePath,
        options.readFile ?? ((p) => ts.sys.readFile(p)),
    );

    if (tsConfig.error) {
        throw new Error(
            ts.formatDiagnostic(tsConfig.error, {
                getCanonicalFileName: (fileName: string) => fileName,
                getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
                getNewLine: () => ts.sys.newLine,
            }),
        );
    }

    const compilerOptions: CompilerOptions = {
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.ESNext,
        configFilePath,
        ...(tsConfig.config as CompilerOptions),
        ...(options.compilerOptions ?? {}),
    };

    return {
        name: 'unplugin-deepkit-type',
        enforce: 'pre',
        transformInclude: (id: string) => filter(id),
        transform: (code: string, fileName: string) => {
            const transformed = ts.transpileModule(code, {
                compilerOptions,
                fileName,
                transformers,
            });
            return {
                code: transformed.outputText,
                ...(transformed.sourceMapText
                    ? {
                          map: transformed.sourceMapText,
                      }
                    : {}),
            };
        },
    };
};

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
