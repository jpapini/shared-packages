import type { Config as SwcConfig } from '@swc/types';
import type { Config } from 'jest';
import type { TsJestTransformerOptions } from 'ts-jest';

export type CreateJestConfigOptions = Exclude<Partial<Config>, 'rootDir'> & {
    rootDir: string;
};

function createBaseJestConfig(options: CreateJestConfigOptions): Config {
    return {
        ...options,
        rootDir: options.rootDir,
        collectCoverageFrom: [
            '<rootDir>/src/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}',
            ...(options.collectCoverageFrom ?? []),
        ],
        coverageDirectory: options.coverageDirectory ?? '<rootDir>/coverage',
        coveragePathIgnorePatterns: [
            'index.ts',
            'index.tsx',
            ...(options.coveragePathIgnorePatterns ?? []),
        ],
        testMatch: [
            '<rootDir>/src/**/*.test.{ts,tsx}',
            '<rootDir>/src/**/*.spec.{ts,tsx}',
            ...(options.testMatch ?? []),
        ],
    };
}

export function createSwcJestConfig(
    options: CreateJestConfigOptions,
    swcConfig: SwcConfig = {},
): Config {
    return createBaseJestConfig({
        ...options,
        transform: {
            '^.+\\.(t|j|mj|cj)sx?$': [
                '@swc/jest',
                {
                    ...swcConfig,
                    jsc: {
                        ...swcConfig.jsc,
                        parser: {
                            ...swcConfig.jsc?.parser,
                            syntax: 'typescript',
                        },
                        transform: {
                            ...swcConfig.jsc?.transform,
                            useDefineForClassFields: true,
                        },
                        keepClassNames: true,
                        externalHelpers: false,
                    },
                } satisfies SwcConfig,
            ],
            ...(options.transform ?? {}),
        },
    });
}

export function createTsJestConfig(
    options: CreateJestConfigOptions,
    tsJestConfig: TsJestTransformerOptions = {},
): Config {
    return createBaseJestConfig({
        ...options,
        transform: {
            '^.+\\.(t|j|mj|cj)sx?$': [
                'ts-jest',
                {
                    ...tsJestConfig,
                } satisfies TsJestTransformerOptions,
            ],
            ...(options.transform ?? {}),
        },
    });
}
