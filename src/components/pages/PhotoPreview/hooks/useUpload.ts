import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import { API_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useUserContext } from 'context/UserContext';
import { useCallback, useRef, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { Response } from 'types';
import { Params } from './types';

const MAX_TRIES = 1;

function useUpload({ pickedImage, imageUri }: Params) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, StackPages.PHOTO_PREVIEW>>();
    const { setPhotos } = useUserContext();
    const { token } = useUserContext();
    const [loading, setLoading] = useState<boolean>(false);
    const triesRef = useRef<number>(0);

    const closePage = useCallback(() => navigation.pop(), [navigation]);

    const uploadImage = useCallback(async () => {
        if (!pickedImage) throw new Error('Картинка не выбрана');

        const formData = new FormData();

        formData.append('image', pickedImage);

        try {
            const response = await fetch(`${API_URL}/user/images/upload`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            const result: Response<{ uri: string }> = await response.json();

            if (result.error) {
                throw new Error(result.error);
            } else {
                setPhotos((photos) => [...photos, result.data.uri]);
                triesRef.current = 0;
            }
        } catch (err) {
            if (err instanceof Error) {
                if (triesRef.current < MAX_TRIES) {
                    triesRef.current++;
                    console.log('retry');
                    await uploadImage();
                } else {
                    throw new Error(err.message);
                }
            }
        }
    }, [pickedImage, token, setPhotos]);

    const deleteImage = useCallback(async () => {
        if (!imageUri) throw new Error('Невозможно определить имя картинки');

        const imageName = imageUri.split('/').pop();
        const response = await fetch(`${API_URL}/user/images/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ fileName: imageName }),
        });
        const result: Response<{ photos: string[] }> = await response.json();

        if (result.error) {
            throw new Error(result.error);
        } else {
            setPhotos(result.data.photos);
        }
    }, [imageUri, setPhotos, token]);

    const imageActionHandler = useCallback(async () => {
        let isOpened = true;

        try {
            setLoading(true);

            if (pickedImage) {
                await uploadImage();
            } else {
                await deleteImage();
            }

            isOpened = false;
            closePage();
        } catch (err) {
            console.trace(err);
            if (err instanceof Error) {
                Alert.alert('Ошибка', err.message);
            }
        } finally {
            if (isOpened) setLoading(false);
        }
    }, [uploadImage, closePage, deleteImage, pickedImage]);

    return { loading, imageActionHandler, closePage };
}

export default useUpload;
