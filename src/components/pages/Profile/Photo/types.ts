import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

export type PhotoProps = (
    | {
          type: 'upload';
      }
    | {
          type?: 'view';
          src: string;
          imageStyle?: StyleProp<ImageStyle>;
          imageWidth?: number;
          imageHeight?: number;
      }
) & { style?: StyleProp<ViewStyle> };
