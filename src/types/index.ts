export type Response<T = any> = { error: string; data: never } | { error: never; data: T };

export interface UserData {
    name: string;
    email: string;
    photos: string[];
}
