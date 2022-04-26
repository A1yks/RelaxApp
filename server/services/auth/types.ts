export type Token = string;

export interface LoginError {
    status: number;
    error: string;
}

export function isLoginError(res: Token | LoginError): res is LoginError {
    return (res as LoginError).error !== undefined;
}
