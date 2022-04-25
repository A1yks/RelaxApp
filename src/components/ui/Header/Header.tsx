import VectorDrawable from '@klarna/react-native-vector-drawable';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Header: FC<BottomTabHeaderProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable>
                    <VectorDrawable resourceName="menu" style={styles.menuIcon} />
                </Pressable>
                <VectorDrawable resourceName="logo" style={styles.logoIcon} />
                <Pressable style={styles.profileIconWrapper}>
                    <Image source={require('../../../images/profile.png')} style={styles.profileIcon} />
                </Pressable>
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
    },
    menuIcon: {
        width: 22,
        height: 20,
    },
    logoIcon: {
        height: 49,
        width: 44,
    },
    profileIcon: {
        width: '100%',
        height: '100%',
    },
    profileIconWrapper: {
        width: 35,
        height: 35,
    },
});

export default Header;
