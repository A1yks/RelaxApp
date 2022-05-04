import { DocumentPickerResponse } from 'react-native-document-picker';

export interface Params {
    pickedImage?: DocumentPickerResponse;
    imageUri?: string;
}
