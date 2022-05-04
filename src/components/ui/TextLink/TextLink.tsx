import React, { FC } from 'react';
import { StyleSheet, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from '@components/ui/Text';

interface Props {
    children: string;
    onPress?: TouchableOpacityProps['onPress'];
    style?: TextProps['style'];
    disabled?: boolean;
}

const TextLink: FC<Props> = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
            <Text style={[props.style, props.disabled && style.disabled]}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    disabled: {
        color: '#ccc',
    },
});

export default TextLink;
