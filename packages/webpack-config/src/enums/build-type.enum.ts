export const BuildType = {
    REACT_APP: 'REACT_APP',
    NEST_APP: 'NEST_APP',
} as const;
export type BuildType = (typeof BuildType)[keyof typeof BuildType];
