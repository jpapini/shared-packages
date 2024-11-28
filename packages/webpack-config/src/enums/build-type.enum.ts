export const BuildType = {
    REACT_APP: 'REACT_APP',
    NEST_APP: 'NEST_APP',
} as const;
// eslint-disable-next-line @typescript-eslint/naming-convention
export type BuildType = (typeof BuildType)[keyof typeof BuildType];
