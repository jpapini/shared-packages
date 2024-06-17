/**
 * @param {string} rootDir - The root directory of the project
 * @param {import("jest").Config} overrides - Jest configuration overrides
 * @returns {import("jest").Config} Jest configuration
 */
function createJestConfig(rootDir, overrides = {}) {
    /** @type {import("jest").Config} */
    const config = {
        ...overrides,
        rootDir,
        collectCoverageFrom: [
            '<rootDir>/src/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}',
            ...(overrides.collectCoverageFrom ?? []),
        ],
        coverageDirectory: overrides.coverageDirectory ?? '<rootDir>/coverage',
        coveragePathIgnorePatterns: [
            'index.ts',
            'index.tsx',
            ...(overrides.coveragePathIgnorePatterns ?? []),
        ],
        testMatch: [
            '<rootDir>/src/**/*.test.{ts,tsx}',
            '<rootDir>/src/**/*.spec.{ts,tsx}',
            ...(overrides.testMatch ?? []),
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
            ...(overrides.transform ?? {}),
        },
    };

    return config;
}

module.exports = { createJestConfig };
