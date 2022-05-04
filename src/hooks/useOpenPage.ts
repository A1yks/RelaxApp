import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

interface Params<T extends object> {
    replace?: boolean;
    params?: T;
}

function useOpenPage() {
    const navigation = useNavigation<NativeStackHeaderProps['navigation']>();

    return <T extends object>(page: string, params?: Params<T>) =>
        () => {
            if (params?.replace) navigation.replace(page, params.params);
            else navigation.navigate(page, params?.params);
        };
}

export default useOpenPage;
