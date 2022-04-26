export interface Response<T = any> {
    error?: string;
    data?: T;
}
