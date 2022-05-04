import { ClientUserData } from '../user/types';

export type Token = string;

export interface ClientResponse {
    user: ClientUserData;
    token: Token;
}
