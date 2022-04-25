import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

function useOpenPage() {
    const navigation = useNavigation<NativeStackHeaderProps['navigation']>();

    return (page: string) => () => navigation.navigate(page);
}

export default useOpenPage;
