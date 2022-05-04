import { useCallback, useState } from 'react';
import { API_URL, API_DEBUG_URL } from '@env';
import { Alert } from 'react-native';
import { Params } from './types';
import { PageVariant } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from 'context/UserContext';
import { Response, UserData } from 'types';

function useAuth({ isRegister }: Params) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { setUserData, setSignedIn, setToken } = useUserContext();

    const setContextUserData = useCallback(
        async (data: UserData, token: string) => {
            await Promise.all([AsyncStorage.setItem('email', data.email), AsyncStorage.setItem('token', token)]);
            setUserData(data);
            setToken(token);
            setSignedIn(true);
        },
        [setUserData, setToken, setSignedIn]
    );

    async function sendRequest(variant: PageVariant, successText?: string) {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/auth/${variant}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const result: Response<{ user: UserData; token: string }> = await response.json();

            if (result.error) {
                throw new Error(result.error);
            } else {
                setContextUserData(result.data.user, result.data.token);
            }

            if (successText) Alert.alert('Успех', successText);
        } catch (err) {
            if (err instanceof Error) {
                Alert.alert('Ошибка', err.message);
            }

            setLoading(false);

            return false;
        }

        return true;
    }

    function loginUser() {
        sendRequest('login');
    }

    function registerUser() {
        sendRequest('register', 'Вы успешно зарегистрировались');
    }

    function authHandler() {
        if (isRegister) registerUser();
        else loginUser();
    }

    const nameChangeHandler = useCallback((name: string) => setName(name), []);
    const emailChangeHandler = useCallback((email: string) => setEmail(email), []);
    const passwordChangeHandler = useCallback((password: string) => setPassword(password), []);

    return { name, email, password, authHandler, nameChangeHandler, emailChangeHandler, passwordChangeHandler, loading };
}

export default useAuth;
