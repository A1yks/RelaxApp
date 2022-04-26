declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_CONNECT: string;
            TOKEN_SECRET: string;
        }
    }
}

export {};
