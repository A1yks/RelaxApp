import Recommendations from '@components/pages/Recommendations';
import UserGuide from '@components/pages/UserGuide';
import Text from '@components/ui/Text';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import icon from '../../../utils/icon';
import Main from '../../pages/Main';
import Profile from '../../pages/Profile';
import { TabScreens, TabsNavigatorParamList } from './types';

const Tab = createBottomTabNavigator<TabsNavigatorParamList>();

const TabsNavigator: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName={TabScreens.MAIN}
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#fff',
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
            <Tab.Screen name={TabScreens.MAIN} component={Main} options={{ tabBarIcon: icon('logo', { width: 29, height: 30 }) }} />
            <Tab.Screen
                name={TabScreens.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: icon('profile', { width: 19, height: 25 }),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#253334',
        borderTopWidth: 0,
        height: 80,
    },
});

export default TabsNavigator;
