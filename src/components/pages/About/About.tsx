import Text from '@components/ui/Text';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const About: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>Лабораторная работа №3</Text>
                <Text style={[styles.text, styles.indent]}>Номер группы: 951007</Text>
                <Text style={[styles.text, styles.indent]}>Имя: Куфтырев Алексей</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#253334',
    },
    text: {
        fontSize: 30,
        color: '#fff',
    },
    indent: {
        marginTop: 10,
    },
    textWrapper: {
        alignItems: 'center',
        marginBottom: 120,
    },
});

export default About;
