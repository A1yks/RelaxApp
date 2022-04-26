import express from 'express';

declare global {
    namespace Server {
        export interface ResponseBody<T = any> {
            error?: string;
            data?: T;
        }

        export interface Request<T = any> extends express.Request {
            body: T;
        }

        export interface Response<T = any> extends express.Response<ResponseBody<T>> {}
    }
}
