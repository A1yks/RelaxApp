import VectorDrawable from '@klarna/react-native-vector-drawable';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';

const ModalHeader: FC<NativeStackHeaderProps> = (props) => {
    const goBack = useCallback(() => props.navigation.goBack(), [props.navigation]);

    return (
        <View style={styles.header}>
            <TouchableNativeFeedback
                onPress={goBack}
                style={styles.arrowIconWrapper}
                background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.1)', true, 20)}
            >
                <View style={styles.arrowIconWrapper}>
                    <VectorDrawable resourceName="arrow" style={styles.arrowIcon} />
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#253334',
    },
    arrowIcon: {
        aspectRatio: 1,
        tintColor: '#fff',
    },
    arrowIconWrapper: {
        width: 40,
        height: 40,
        padding: 10,
    },
});

export default ModalHeader;
