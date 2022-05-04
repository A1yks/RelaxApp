import React from 'react';
import { Response, UserData } from 'types';

export interface IUserContext extends UserData {
    token: string;
    isSignedIn: boolean;
    setSignedIn(isSignedIn: boolean): void;
    setName(name: string): void;
    setEmail(email: string): void;
    setToken(token: string): void;
    setUserData(data: UserData): void;
    setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
    fetchProfile(email: string, token: string, update?: boolean): Promise<void | Response<UserData>>;
}
