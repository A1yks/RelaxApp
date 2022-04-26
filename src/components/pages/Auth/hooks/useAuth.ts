import { StackPages } from '@components/navigation/StackNavigator/types';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { API_URL } from '@env';
import { Alert } from 'react-native';
import { Response } from './types';

interface Params {
    isRegister: boolean;
}

function useAuth({ isRegister }: Params) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigator = useNavigation<NativeStackHeaderProps['navigation']>();

    async function loginUser() {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data: Response = await response.json();

            if (!response.ok) return Alert.alert('Ошибка', data.error);
        } catch (err) {
            Alert.alert('Ошибка', 'Не удалось выполнить вход');
        } finally {
            setLoading(false);
        }
    }

    const authHandler = useCallback(() => {
        if (!isRegister) {
            navigator.reset({ index: 0, routes: [{ name: StackPages.APP }] });
        }
    }, [navigator, isRegister]);

    const nameChangeHandler = useCallback((name: string) => setName(name), []);
    const emailChangeHandler = useCallback((email: string) => setEmail(email), []);
    const passwordChangeHandler = useCallback((password: string) => setPassword(password), []);

    return { authHandler, nameChangeHandler, emailChangeHandler, passwordChangeHandler, loading };
}

export default useAuth;
