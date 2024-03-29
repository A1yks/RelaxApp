import VectorDrawable from '@klarna/react-native-vector-drawable';
import useOpenPage from 'hooks/useOpenPage';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { StackPages } from '../../navigation/StackNavigator/types';
import Button from '@components/ui/Button';
import TextLink from '@components/ui/TextLink';
import Text from '@components/ui/Text';

const Onboarding: FC = () => {
    const openPage = useOpenPage();

    return (
        <ImageBackground source={{ uri: 'onboarding_bg' }} style={styles.container}>
            <View style={styles.welcome}>
                <VectorDrawable resourceName="logo" style={styles.logo} />
                <View style={styles.welcomeTextWrapper}>
                    <Text style={[styles.text, styles.welcomeMainText]}>Привет</Text>
                    <Text style={styles.text}>Наслаждайся отборочными.</Text>
                    <Text style={styles.text}>Будь внимателен.</Text>
                    <Text style={styles.text}>Делай хорошо.</Text>
                </View>
            </View>
            <View style={styles.enterAccountWrapper}>
                <Button onPress={openPage(StackPages.LOGIN)}>Войти в аккаунт</Button>
                <View style={styles.noAccountTextWrapper}>
                    <Text style={[styles.text, styles.noAccountText]}>Еще нет аккаунта? </Text>
                    <TextLink style={[styles.text, styles.registerText]} onPress={openPage(StackPages.REGISTER)}>
                        Зарегистрируйтесь
                    </TextLink>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
    },
    logo: {
        width: 191,
        height: 202,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    welcome: {
        alignItems: 'center',
        marginTop: 30,
    },
    welcomeMainText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 34,
    },
    welcomeTextWrapper: {
        alignItems: 'center',
        marginTop: 32,
    },
    enterAccountWrapper: {
        paddingHorizontal: 27,
        marginTop: 100,
        marginBottom: 50,
    },
    noAccountText: {
        fontSize: 18,
    },
    noAccountTextWrapper: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Onboarding;
