import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Text from '@components/ui/Text';
import Button from '@components/ui/Button';
import { ZodiacSigns } from 'context/HoroscopeContext/types';
import { useHoroscopeContext } from 'context/HoroscopeContext/HoroscopeContext';

const ZodiacSelection: FC = () => {
    const { zodiacSign, setZodiacSign, loading, fetchHoroscope } = useHoroscopeContext();

    return (
        <View>
            <Text style={styles.text}>Выбери свой знак зодиака</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                    dropdownIconColor="#fff"
                    style={styles.text}
                    itemStyle={styles.pickerItem}
                    selectedValue={zodiacSign}
                    onValueChange={setZodiacSign}
                >
                    <Picker.Item label="Овен" value={ZodiacSigns.ARIES} />
                    <Picker.Item label="Телец" value={ZodiacSigns.TAURUS} />
                    <Picker.Item label="Близнецы" value={ZodiacSigns.GEMINI} />
                    <Picker.Item label="Рак" value={ZodiacSigns.CANCER} />
                    <Picker.Item label="Лев" value={ZodiacSigns.LEO} />
                    <Picker.Item label="Дева" value={ZodiacSigns.VIRGO} />
                    <Picker.Item label="Весы" value={ZodiacSigns.LIBRA} />
                    <Picker.Item label="Скорпион" value={ZodiacSigns.SCORPIO} />
                    <Picker.Item label="Стрелец" value={ZodiacSigns.SAGITTARIUS} />
                    <Picker.Item label="Козерог" value={ZodiacSigns.CAPRICORN} />
                    <Picker.Item label="Водолей" value={ZodiacSigns.AQUARIUS} />
                    <Picker.Item label="Рыбы" value={ZodiacSigns.PISCES} />
                </Picker>
            </View>
            <Button loading={loading} style={styles.btn} onPress={fetchHoroscope}>
                Узнать гороскоп
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 12,
        marginTop: 10,
    },
    pickerItem: {
        fontFamily: 'Alegreya',
    },
    btn: {
        marginTop: 30,
    },
});

export default ZodiacSelection;
