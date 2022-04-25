import React, { FC } from 'react';
import { ImageRequireSource } from 'react-native';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
    title: string;
    description: string;
    image: ImageRequireSource;
    style?: ViewStyle;
}

const Block: FC<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <View></View>
            <Image source={props.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F3F0',
        borderRadius: 20,
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 22,
    },
});

export default Block;
