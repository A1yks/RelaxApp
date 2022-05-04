import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';

interface Props {
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
}

const Text: FC<Props> = (props) => {
    return <RNText style={[styles.text, props.style]}>{props.children}</RNText>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Alegreya',
    },
});

export default Text;
