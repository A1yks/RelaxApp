import { ImageSourcePropType, ImageURISource } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';

export enum StackPages {
    LOGIN = 'login',
    REGISTER = 'register',
    ONBOARDING = 'onboarding',
    RECOMMENDATIONS = 'recommendations',
    HOROSCOPE = 'horoscope',
    APP = 'app',
    USER_GUIDE = 'user-guide',
    PHOTO_PREVIEW = 'photo-preview',
}

export type RootStackParamList = {
    [StackPages.LOGIN]: undefined;
    [StackPages.REGISTER]: undefined;
    [StackPages.ONBOARDING]: undefined;
    [StackPages.HOROSCOPE]: undefined;
    [StackPages.RECOMMENDATIONS]: { title: string; content: string };
    [StackPages.APP]: undefined;
    [StackPages.USER_GUIDE]: undefined;
    [StackPages.PHOTO_PREVIEW]: { photo: ImageURISource; pickedImage?: DocumentPickerResponse };
};
