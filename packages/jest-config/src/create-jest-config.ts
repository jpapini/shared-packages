import type { Config } from 'jest';

export type CreateJestConfigOptions = Exclude<Partial<Config>, 'rootDir'> & {
    rootDir: string;
};

export function createJestConfig(options: CreateJestConfigOptions): Config {
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
        transform: {
            '^.+\\.(t|j|mj|cj)sx?$': [
                '@swc/jest',
                {
                    jsc: {
                        transform: {
                            react: {
                                runtime: 'automatic',
                            },
                        },
                    },
                },
            ],
            ...(options.transform ?? {}),
        },
    };
}
