import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerScreens, DrawerParamList } from './types';
import About from '@components/pages/About';
import TabsNavigator from '../TabsNavigator';
import Header from '@components/ui/Header';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                header: (props) => <Header {...props} />,
                drawerContentStyle: styles.drawerContent,
                drawerActiveBackgroundColor: 'rgba(255, 255, 255, 0.1)',
                drawerLabelStyle: styles.drawerLabel,
            }}
            useLegacyImplementation
            initialRouteName={DrawerScreens.TABS}
        >
            <Drawer.Screen name={DrawerScreens.TABS} component={TabsNavigator} options={{ title: 'Главная' }} />
            <Drawer.Screen name={DrawerScreens.ABOUT_DEV} component={About} options={{ title: 'О разработчике' }} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        backgroundColor: '#253334',
    },
    drawerLabel: {
        color: '#fff',
    },
});

export default DrawerNavigator;
