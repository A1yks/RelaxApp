import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import Button from '@components/ui/Button';
import { DOMAIN } from '@env';
import VectorDrawable from '@klarna/react-native-vector-drawable';
import useOpenPage from 'hooks/useOpenPage';
import React, { FC } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import useFilePick from './hooks/useFilePick';
import { PhotoProps } from './types';

const Photo: FC<PhotoProps> = (props) => {
    const isUpload = props.type === 'upload';
    const { pickFile } = useFilePick();
    const openPage = useOpenPage();

    if (isUpload)
        return (
            <Button style={[styles.upload, props.style]} onPress={pickFile}>
                <VectorDrawable resourceName="plus" style={styles.addIcon} />
            </Button>
        );

    const photoUri = DOMAIN + props.src;

    return (
        <TouchableNativeFeedback
            onPress={openPage<RootStackParamList[StackPages.PHOTO_PREVIEW]>(StackPages.PHOTO_PREVIEW, { params: { photo: { uri: photoUri } } })}
        >
            <View style={[styles.container, props.style]}>
                <Image
                    resizeMode="cover"
                    source={{ uri: photoUri, width: props.imageWidth, height: props.imageHeight }}
                    style={[styles.image, props.imageStyle]}
                />
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    container: {},
    image: {
        aspectRatio: 4.5 / 3,
        borderRadius: 20,
    },
    addIcon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
    },
    upload: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6aae72',
        padding: 0,
        height: 0,
        aspectRatio: 4.5 / 3,
        borderRadius: 20,
    },
});

Photo.defaultProps = {
    type: 'view',
};

export default Photo;
