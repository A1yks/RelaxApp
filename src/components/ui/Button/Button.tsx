import React, { FC, ReactNode } from 'react';
import { ButtonProps, StyleSheet, TouchableNativeFeedback, View, ViewStyle, TextStyle, StyleProp, ActivityIndicator } from 'react-native';
import Text from '@components/ui/Text';

interface Props {
    onPress?: ButtonProps['onPress'];
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    loading?: boolean;
}

const Button: FC<Props> = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={[styles.button, props.style]}>
                {props.loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : typeof props.children === 'string' ? (
                    <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
                ) : (
                    props.children
                )}
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7C9A92',
        borderRadius: 10,
        padding: 16,
        height: 65,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default Button;
