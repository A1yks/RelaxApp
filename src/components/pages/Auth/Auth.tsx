import VectorDrawable from '@klarna/react-native-vector-drawable';
import React, { FC } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { pageTexts } from '.';
import useOpenPage from '../../../hooks/useOpenPage';
import { StackPages } from '../../navigation/StackNavigator/types';
import Button from '../../ui/Button';
import TextLink from '../../ui/TextLink';
import { PageVariant } from './types';

interface Props {
    variant: PageVariant;
}

const Auth: FC<Props> = (props) => {
    const texts = pageTexts[props.variant];
    const isRegisterPage = props.variant === 'register';
    const openPage = useOpenPage();

    function pressHandler() {}

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.content}>
                <VectorDrawable resourceName="logo" style={styles.logo} />
                <Text style={[styles.text, styles.pageText]}>{texts.page}</Text>
                <View style={styles.inputWrapper}>
                    {isRegisterPage && <TextInput placeholderTextColor="#BEC2C2" style={styles.input} placeholder="Имя" textContentType="name" />}
                    <TextInput
                        placeholderTextColor="#BEC2C2"
                        style={[styles.input, isRegisterPage && styles.inputMt]}
                        placeholder="Email адрес"
                        textContentType="emailAddress"
                    />
                    <TextInput
                        placeholderTextColor="#BEC2C2"
                        style={[styles.input, styles.inputMt]}
                        placeholder="Пароль"
                        textContentType="newPassword"
                        autoComplete={isRegisterPage ? 'password-new' : 'password'}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button onPress={pressHandler}>{texts.buttonText}</Button>
                    <View style={styles.bottomTextWrapper}>
                        <Text style={[styles.text, styles.bottomText]}>{texts.bottomText} </Text>
                        <TextLink
                            style={[styles.text, styles.pressableText]}
                            onPress={openPage(isRegisterPage ? StackPages.LOGIN : StackPages.REGISTER)}
                        >
                            {texts.pressableText}
                        </TextLink>
                    </View>
                </View>
            </View>
            <Image source={require('../../../images/leaves.png')} style={styles.bottomImg} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253334',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    content: {
        paddingHorizontal: 27,
    },
    logo: {
        width: 49,
        height: 54,
        marginTop: 70,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    pageText: {
        fontSize: 30,
        marginTop: 30,
    },
    input: {
        color: '#fff',
        borderBottomColor: '#BEC2C2',
        borderBottomWidth: 1,
        fontSize: 18,
    },
    inputMt: {
        marginTop: 25,
    },
    inputWrapper: {
        marginTop: 50,
    },
    buttonWrapper: {
        marginVertical: 30,
    },
    bottomText: {
        fontWeight: '400',
        textAlign: 'center',
    },
    bottomTextWrapper: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressableText: {
        fontWeight: '500',
    },
    bottomImg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: -1,
    },
});

export default Auth;
