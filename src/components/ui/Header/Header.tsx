import { TabScreens } from '@components/navigation/TabsNavigator/types';
import VectorDrawable from '@klarna/react-native-vector-drawable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useUserContext } from 'context/UserContext';
import useOpenPage from 'hooks/useOpenPage';
import React, { FC, useCallback } from 'react';
import { Alert, Image, Pressable, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import Text from '../Text';

const Header: FC<DrawerHeaderProps> = (props) => {
    const { navigation, route } = props;
    const { setSignedIn } = useUserContext();
    const openPage = useOpenPage();

    const logout = useCallback(async () => {
        Alert.alert('Подтвердите действие', 'Вы уверены, что хотите выйти?', [
            { text: 'Нет', style: 'cancel' },
            {
                text: 'Да',
                async onPress() {
                    await Promise.all([AsyncStorage.removeItem('email'), AsyncStorage.removeItem('token')]);

                    setSignedIn(false);
                },
            },
        ]);
    }, [setSignedIn]);

    const getRightHeaderButton = useCallback(() => {
        let childRouteName = getFocusedRouteNameFromRoute(route);

        if (childRouteName === TabScreens.PROFILE)
            return (
                <Pressable onPress={logout}>
                    <Text style={styles.profileHeaderRight}>Выйти</Text>
                </Pressable>
            );

        return (
            <Pressable style={styles.profileIconWrapper} onPress={openPage(TabScreens.PROFILE)}>
                <Image source={require('@images/profile.png')} style={styles.profileIcon} />
            </Pressable>
        );
    }, [route, openPage, logout]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableNativeFeedback
                    onPress={navigation.openDrawer}
                    background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.1)', true, 25)}
                >
                    <View>
                        <VectorDrawable resourceName="menu" style={styles.menuIcon} />
                    </View>
                </TouchableNativeFeedback>
                <VectorDrawable resourceName="logo" style={styles.logoIcon} />
                {getRightHeaderButton()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#253334',
        paddingHorizontal: 25,
        paddingTop: 50,
        paddingBottom: 30,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        height: 49,
    },
    menuIcon: {
        width: 22,
        height: 20,
    },
    logoIcon: {
        height: 49,
        width: 44,
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -22 }],
    },
    profileIcon: {
        width: '100%',
        height: '100%',
    },
    profileIconWrapper: {
        width: 35,
        height: 35,
    },
    profileHeaderRight: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
});

export default Header;
