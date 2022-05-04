import { StackPages } from '@components/navigation/StackNavigator/types';
import { API_DEBUG_URL, API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider, useUserContext } from 'context/UserContext';
import React, { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Response, UserData } from 'types';
import StackNavigator from '../navigation/StackNavigator';

const UserDataLoader: FC<PropsWithChildren<{}>> = (props) => {
    const { fetchProfile } = useUserContext();
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    const getUserData = useCallback(async () => {
        try {
            setDataLoaded(false);

            const [email, token] = await Promise.all([AsyncStorage.getItem('email'), AsyncStorage.getItem('token')]);

            if (!email || !token) return;

            await fetchProfile(email, token);
        } catch (err) {
            console.error(err);
        } finally {
            setDataLoaded(true);
        }
    }, [fetchProfile]);

    useEffect(() => {
        getUserData().then(() => SplashScreen.hide());
    }, [getUserData]);

    if (!dataLoaded) return null;

    return <>{props.children}</>;
};

const App: FC = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#7C9A92" />
            <UserContextProvider>
                <UserDataLoader>
                    <View style={styles.navigatorWrapper}>
                        <StackNavigator />
                    </View>
                </UserDataLoader>
            </UserContextProvider>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    navigatorWrapper: {
        backgroundColor: '#253334',
        flex: 1,
    },
});

export default App;
