export const BuildType = {
    REACT_APP: 'REACT_APP',
    NODE_APP: 'NODE_APP',
} as const;

export type BuildType = (typeof BuildType)[keyof typeof BuildType];
