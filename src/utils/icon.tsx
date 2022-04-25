import VectorDrawable from '@klarna/react-native-vector-drawable';
import React from 'react';

interface IconProps {
    color: string;
    size: number;
    focused?: boolean;
}

interface IconSize {
    width: number;
    height: number;
}

function icon(iconName: string, size: IconSize) {
    return (props: IconProps) => <VectorDrawable resourceName={iconName} style={{ ...size, tintColor: '#fff', opacity: props.focused ? 1 : 0.5 }} />;
}

export default icon;
