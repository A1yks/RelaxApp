import { useUserContext } from 'context/UserContext';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Block from '@components/ui/Block';
import FeelButtons from './FeelButtons';
import Text from '@components/ui/Text';
import useOpenPage from 'hooks/useOpenPage';
import { StackPages } from '@components/navigation/StackNavigator/types';

const Main: FC = () => {
    const { name } = useUserContext();
    const openPage = useOpenPage();

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.welcomeBackTextWrapper}>
                    <Text style={[styles.text, styles.welcomeBackText]}>С возвращением, </Text>
                    <Text style={[styles.text, styles.welcomeBackText]}>{name}</Text>
                </View>
                <Text style={[styles.text, styles.questionText]}>Каким ты ощущаешь себя сегодня?</Text>
            </View>
            <FeelButtons />
            <View style={styles.blocksContainer}>
                <Block
                    title="Гороскоп"
                    description="Узнай свой гороскоп на сегодня"
                    image={require('@images/cardio.png')}
                    onButtonPress={openPage(StackPages.HOROSCOPE)}
                />
                <Block
                    title="Руководство пользователя"
                    description="Поможет разобраться, как работает приложение"
                    image={require('@images/meditation.png')}
                    style={styles.blockWithMargin}
                    onButtonPress={openPage(StackPages.USER_GUIDE)}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253334',
        paddingHorizontal: 25,
        flex: 1,
    },
    text: {
        color: '#fff',
    },
    welcomeBackText: {
        fontSize: 30,
        fontWeight: '500',
    },
    welcomeBackTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    questionText: {
        opacity: 0.7,
        fontSize: 20,
    },
    blocksContainer: {
        marginTop: 23,
    },
    blockWithMargin: {
        marginTop: 26,
    },
});

export default Main;
