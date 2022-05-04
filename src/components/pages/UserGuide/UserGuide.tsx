// @ts-nocheck
import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useOpenPage from 'hooks/useOpenPage';
import React, { FC, useEffect, useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import OnboardingSwiper from 'react-native-onboarding-swiper';

const UserGuide: FC<NativeStackScreenProps<RootStackParamList, StackPages.USER_GUIDE>> = () => {
    const swiperRef = useRef<OnboardingSwiper>(null);
    const isFocused = useIsFocused();
    const openPage = useOpenPage();

    useEffect(() => {
        if (!isFocused) setTimeout(() => swiperRef.current?.goToPage(0, true), 300);
    }, [isFocused]);

    return (
        <OnboardingSwiper
            pages={[
                {
                    backgroundColor: '#253334',
                    image: <Image source={require('@images/recommendations.png')} style={styles.image} />,
                    title: 'Рекомендации',
                    subtitle: 'Получай рекомендации на основе своего самочувствия',
                },
                {
                    backgroundColor: '#253334',
                    image: <Image source={require('@images/horoscope.png')} style={styles.image} />,
                    title: 'Гороскоп',
                    subtitle: 'Узнавай актуальный гороскоп для своего знака зодиака',
                },
                {
                    backgroundColor: '#253334',
                    image: <Image source={require('@images/upload.png')} style={styles.image} />,
                    title: 'Фотографии',
                    subtitle: 'Загружай фотографии, которые хочешь сохранить',
                },
            ]}
            ref={swiperRef}
            onDone={openPage(StackPages.APP, { replace: true })}
            skipToPage={2}
            skipLabel="Пропустить"
            nextLabel="Далее"
        />
    );
};

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        height: 200,
    },
});

export default UserGuide;
