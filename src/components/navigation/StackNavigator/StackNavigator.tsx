import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import Auth from '../../pages/Auth/Auth';
import Onboarding from '../../pages/Onboarding';
import { StackPages } from './types';

const Stack = createNativeStackNavigator();

const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName={StackPages.ONBOARDING} screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
            <Stack.Screen name={StackPages.ONBOARDING} component={Onboarding} />
            <Stack.Screen name={StackPages.LOGIN}>{(props) => <Auth {...props} variant="login" />}</Stack.Screen>
            <Stack.Screen name={StackPages.REGISTER}>{(props) => <Auth {...props} variant="register" />}</Stack.Screen>
        </Stack.Navigator>
    );
};

export default StackNavigator;
