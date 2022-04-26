import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import icon from '../../../utils/icon';
import Main from '../../pages/Main';
import Profile from '../../pages/Profile';
import Header from '../../ui/Header';
import { TabScreens } from './types';

const Tab = createBottomTabNavigator();

const TabsNavigator: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName={TabScreens.MAIN}
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#fff',
                tabBarShowLabel: false,
                header: (props) => <Header {...props} />,
            }}
        >
            <Tab.Screen name={TabScreens.MAIN} component={Main} options={{ tabBarIcon: icon('logo', { width: 29, height: 30 }) }} />
            <Tab.Screen
                name={TabScreens.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: icon('profile', { width: 19, height: 25 }),
                    headerRight: () => <Text style={styles.profileHeaderRight}>exit</Text>,
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
    profileHeaderRight: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
});

export default TabsNavigator;
