import { API_URL } from '@env';
import { useUserContext } from 'context/UserContext';
import React, { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { Alert } from 'react-native';
import { Response } from 'types';
import { IHoroscopeContext, ZodiacSigns } from './types';

const HoroscopeContext = createContext<IHoroscopeContext | undefined>(undefined);

export function useHoroscopeContext() {
    const context = useContext(HoroscopeContext);

    if (context === undefined) {
        throw new Error('useHoroscopeContext must be used within HoroscopeContextProvider');
    }

    return context;
}

export const HoroscopeContextProvider: FC<PropsWithChildren<{}>> = (props) => {
    const { token } = useUserContext();
    const [zodiacSign, setZodiacSign] = useState<IHoroscopeContext['zodiacSign']>(ZodiacSigns.ARIES);
    const [loading, setLoading] = useState<IHoroscopeContext['loading']>(false);
    const [horoscope, setHoroscope] = useState<IHoroscopeContext['horoscope']>(null);

    const fetchHoroscope = useCallback(async () => {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/user/horoscope/${zodiacSign}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result: Response<IHoroscopeContext['horoscope']> = await response.json();

            if (response.ok && result.data) setHoroscope(result.data);
            else throw new Error(result.error);
        } catch (err) {
            if (err instanceof Error) {
                Alert.alert('Ошибка', err.message);
            }
        } finally {
            setLoading(false);
        }
    }, [zodiacSign, token]);

    return (
        <HoroscopeContext.Provider value={{ zodiacSign, loading, horoscope, fetchHoroscope, setZodiacSign, setLoading, setHoroscope }}>
            {props.children}
        </HoroscopeContext.Provider>
    );
};
