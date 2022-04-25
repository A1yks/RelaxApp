import React, { FC } from 'react';
import { ButtonProps, Text, StyleSheet, TouchableNativeFeedback, View } from 'react-native';

interface Props {
    onPress?: ButtonProps['onPress'];
    children: string;
}

const Button: FC<Props> = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7C9A92',
        borderRadius: 10,
        padding: 16,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default Button;
