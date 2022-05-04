import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import Text from '@components/ui/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useHoroscopeContext } from 'context/HoroscopeContext/HoroscopeContext';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ZodiacSelection from './ZodiacSelection';

const Horoscope: FC<NativeStackScreenProps<RootStackParamList, StackPages.HOROSCOPE>> = () => {
    const { horoscope } = useHoroscopeContext();

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            <ZodiacSelection />
            {horoscope !== null && (
                <View>
                    {horoscope.map((text, i) => (
                        <Text key={i} style={styles.text}>
                            {text}
                        </Text>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#253334',
        flex: 1,
        paddingHorizontal: 25,
    },
    container: {
        paddingVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10,
    },
});

export default Horoscope;
