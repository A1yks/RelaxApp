import Button from '@components/ui/Button';
import React, { FC } from 'react';
import { ImageRequireSource, StyleProp } from 'react-native';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import Text from '@components/ui/Text';

interface Props {
    title: string;
    description: string;
    image: ImageRequireSource;
    style?: StyleProp<ViewStyle>;
    onButtonPress?: () => void;
}

const Block: FC<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <View>
                <Text style={[styles.text, styles.title]}>{props.title}</Text>
                <Text style={[styles.text, styles.description]}>{props.description}</Text>
                <Button style={styles.button} textStyle={[styles.text, styles.buttonText]} onPress={props.onButtonPress}>
                    Подробнее
                </Button>
            </View>
            <Image source={props.image} style={styles.image} />
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#253334',
    },
    image: {
        position: 'absolute',
        right: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
    },
    button: {
        width: 138,
        backgroundColor: '#253334',
        marginTop: 16,
        height: 'auto',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    description: {
        maxWidth: '80%',
    },
});

export default Block;
