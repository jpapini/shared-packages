import type { Configuration as IConfiguration } from 'webpack';
import type { Configuration as IDevServerConfiguration } from 'webpack-dev-server';

export type WebpackConfiguration = IConfiguration & {
    devServer?: IDevServerConfiguration;
};

export type WebpackEnv = {
    WEBPACK_BUNDLE?: boolean;
    WEBPACK_BUILD?: boolean;
    WEBPACK_WATCH?: boolean;
    WEBPACK_SERVE?: boolean;
    WEBPACK_PACKAGE?: string;
    WEBPACK_DEV_SERVER_PACKAGE?: string;
};
