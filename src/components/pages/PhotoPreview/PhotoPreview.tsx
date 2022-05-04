import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import TextLink from '@components/ui/TextLink';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import useUpload from './hooks/useUpload';

const PhotoPreview: FC<NativeStackScreenProps<RootStackParamList, StackPages.PHOTO_PREVIEW>> = (props) => {
    const { route } = props;
    const { loading, imageActionHandler, closePage } = useUpload({ pickedImage: route.params.pickedImage, imageUri: route.params.photo.uri });

    return (
        <View style={styles.container}>
            <Image source={route.params.photo} style={styles.image} />
            <View style={styles.actions}>
                <View style={styles.actionWrapper}>
                    <TextLink style={styles.action} onPress={closePage}>
                        Закрыть
                    </TextLink>
                </View>
                <View style={styles.actionWrapper}>
                    {loading ? (
                        <ActivityIndicator color="#fff" size="large" />
                    ) : (
                        <TextLink onPress={imageActionHandler} style={styles.action}>
                            {route.params.pickedImage ? 'Загрузить' : 'Удалить'}
                        </TextLink>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#253334',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginTop: 'auto',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        marginBottom: 30,
    },
    action: {
        color: '#fff',
        fontSize: 20,
    },
    actionWrapper: {
        minHeight: 60,
        minWidth: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 60,
    },
});

export default PhotoPreview;
