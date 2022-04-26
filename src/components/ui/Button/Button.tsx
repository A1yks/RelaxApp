import React, { FC } from 'react';
import { ButtonProps, Text, StyleSheet, TouchableNativeFeedback, View, ViewStyle, TextStyle, StyleProp } from 'react-native';

interface Props {
    onPress?: ButtonProps['onPress'];
    children: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={[styles.button, props.style]}>
                <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
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
