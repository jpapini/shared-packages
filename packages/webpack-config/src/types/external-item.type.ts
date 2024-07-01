import type { ExternalsPlugin } from 'webpack';

// eslint-disable-next-line @typescript-eslint/naming-convention
type GetArrayInnerType<T> = T extends (infer U)[] ? U : never;

export type IExternalItem = GetArrayInnerType<ExternalsPlugin['externals']>;
