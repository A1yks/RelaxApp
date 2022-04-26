import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

interface Params {
    replace: boolean;
}

function useOpenPage() {
    const navigation = useNavigation<NativeStackHeaderProps['navigation']>();

    return (page: string, params?: Params) => () => {
        if (params?.replace) navigation.replace(page);
        else navigation.navigate(page);
    };
}

export default useOpenPage;
