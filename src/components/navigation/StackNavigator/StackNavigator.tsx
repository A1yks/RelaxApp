import Horoscope from '@components/pages/Horoscope';
import PhotoPreview from '@components/pages/PhotoPreview';
import Recommendations from '@components/pages/Recommendations';
import UserGuide from '@components/pages/UserGuide';
import ModalHeader from '@components/ui/ModalHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HoroscopeContextProvider } from 'context/HoroscopeContext/HoroscopeContext';
import { useUserContext } from 'context/UserContext';
import React, { FC } from 'react';
import Auth from '../../pages/Auth/Auth';
import Onboarding from '../../pages/Onboarding';
import DrawerNavigator from '../DrawerNavigatior';
import { RootStackParamList, StackPages } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: FC = () => {
    const { isSignedIn } = useUserContext();

    return (
        <Stack.Navigator initialRouteName={StackPages.ONBOARDING} screenOptions={{ presentation: 'card', contentStyle: { backgroundColor: '#000' } }}>
            {isSignedIn ? (
                <>
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={StackPages.APP} component={DrawerNavigator} />
                        <Stack.Screen name={StackPages.USER_GUIDE} component={UserGuide} />
                        <Stack.Screen name={StackPages.PHOTO_PREVIEW} component={PhotoPreview} />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ header: (props) => <ModalHeader {...props} /> }}>
                        <Stack.Screen name={StackPages.RECOMMENDATIONS} component={Recommendations} />
                        <Stack.Screen name={StackPages.HOROSCOPE}>
                            {(props) => (
                                <HoroscopeContextProvider>
                                    <Horoscope {...props} />
                                </HoroscopeContextProvider>
                            )}
                        </Stack.Screen>
                    </Stack.Group>
                </>
            ) : (
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={StackPages.ONBOARDING} component={Onboarding} />
                    <Stack.Screen name={StackPages.LOGIN}>{(props) => <Auth {...props} variant="login" />}</Stack.Screen>
                    <Stack.Screen name={StackPages.REGISTER}>{(props) => <Auth {...props} variant="register" />}</Stack.Screen>
                </Stack.Group>
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;
