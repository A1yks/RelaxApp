import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Block from './Block';
import FeelButtons from './FeelButtons';

const Main: FC = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.welcomeBackTextWrapper}>
                    <Text style={[styles.text, styles.welcomeBackText]}>С возвращением, </Text>
                    <Text style={[styles.text, styles.welcomeBackText]}>Эмиль!</Text>
                </View>
                <Text style={[styles.text, styles.questionText]}>Каким ты ощущаешь себя сегодня?</Text>
            </View>
            <FeelButtons />
            <ScrollView>
                <Block title="Заголовок блока" description="Описание" image={require('@images/meditation.png')} />
                <Block title="Заголовок блока" description="Описание" image={require('@images/cardio.png')} />
            </ScrollView>
        </View>
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
    },
    questionText: {
        opacity: 0.7,
        fontSize: 20,
    },
});

export default Main;
