export const NodeEnv = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
    TEST: 'test',
} as const;
// eslint-disable-next-line @typescript-eslint/naming-convention
export type NodeEnv = (typeof NodeEnv)[keyof typeof NodeEnv];
