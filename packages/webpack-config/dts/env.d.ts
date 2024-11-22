declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV?: string | undefined;
            PUBLIC_URL?: string | undefined;
        }
    }
}

export {};
