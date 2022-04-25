import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from '../navigation/StackNavigator';
import TabsNavigator from '../navigation/TabsNavigator';

const App: FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#7C9A92" />
            {/* <StackNavigator /> */}
            <TabsNavigator />
        </NavigationContainer>
    );
};

export default App;
