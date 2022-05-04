import express from 'express';

declare global {
    namespace Server {
        export interface ResponseBody<T = any> {
            error?: string;
            data?: T;
        }

        export interface Request<Body = any, Params = any> extends express.Request<Params> {
            body: Body;
            userId?: string;
        }

        export interface Response<T = any> extends express.Response<ResponseBody<T>> {}
    }

    namespace Service {
        export interface Error {
            status: number;
            error: string;
        }
    }
}
