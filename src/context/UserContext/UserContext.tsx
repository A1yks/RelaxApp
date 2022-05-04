import { API_URL } from '@env';
import React, { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { Response, UserData } from 'types';
import { IUserContext } from './types';

const UserContext = createContext<IUserContext | undefined>(undefined);

export function useUserContext() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUserContext must be used withid UserContextProvider');
    }

    return context;
}

export const UserContextProvider: FC<PropsWithChildren<{}>> = (props) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [isSignedIn, setSignedIn] = useState<boolean>(false);
    const [photos, setPhotos] = useState<IUserContext['photos']>([]);

    const setUserData = useCallback((data: UserData) => {
        setName(data.name);
        setEmail(data.email);
        setPhotos(data.photos);
    }, []);

    const fetchProfile = useCallback(
        async (email: string, token: string, update = true) => {
            const response = await fetch(`${API_URL}/user/${email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result: Response<UserData> = await response.json();

            if (!update) return result;

            if (response.ok && result.data) {
                setUserData(result.data);
                setToken(token);
                setSignedIn(true);
            }
        },
        [setUserData]
    );

    return (
        <UserContext.Provider
            value={{ name, email, photos, token, isSignedIn, setSignedIn, setName, setEmail, setPhotos, setToken, setUserData, fetchProfile }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
