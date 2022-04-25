import React, { FC } from 'react';
import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props {
    children: string;
    onPress?: TouchableOpacityProps['onPress'];
    style?: TextProps['style'];
}

const TextLink: FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={props.style}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default TextLink;
