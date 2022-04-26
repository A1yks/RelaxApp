import { TabScreens } from '@components/navigation/TabsNavigator/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Block from './Block';
import FeelButtons from './FeelButtons';

const Main: FC = () => {
    const navigator = useNavigation<NativeStackHeaderProps['navigation']>();

    useEffect(() => {
        // navigator.reset({ index: 0, routes: [{ name: TabScreens.MAIN }] });
    });

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.welcomeBackTextWrapper}>
                    <Text style={[styles.text, styles.welcomeBackText]}>С возвращением, </Text>
                    <Text style={[styles.text, styles.welcomeBackText]}>Эмиль!</Text>
                </View>
                <Text style={[styles.text, styles.questionText]}>Каким ты ощущаешь себя сегодня?</Text>
            </View>
            <FeelButtons />
            <View style={styles.blocksContainer}>
                <Block title="Заголовок блока" description="Описание" image={require('@images/meditation.png')} />
                <Block title="Заголовок блока" description="Описание" image={require('@images/cardio.png')} style={styles.blockWithMargin} />
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
