import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Alert } from 'react-native';
import DocumenPicker from 'react-native-document-picker';

function useFilePick() {
    const navigator = useNavigation<NavigationProp<RootStackParamList>>();

    const pickFile = useCallback(async () => {
        try {
            const pickedImage = await DocumenPicker.pickSingle({
                type: DocumenPicker.types.images,
            });
            navigator.navigate(StackPages.PHOTO_PREVIEW, { photo: { uri: pickedImage.uri }, pickedImage });
        } catch (err) {
            Alert.alert('Ошибка', 'Не удалось выбрать файл');
        }
    }, [navigator]);

    return { pickFile };
}

export default useFilePick;
