import React, { FC } from 'react';
import VectorDrawable from '@klarna/react-native-vector-drawable';
import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { feelVariants } from '../';
import Text from '@components/ui/Text';
import useOpenPage from 'hooks/useOpenPage';
import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import advices from 'data/advices.json';

const FeelButtons: FC = () => {
    const openPage = useOpenPage();

    return (
        <View style={styles.feelVariantsWrapper}>
            {feelVariants.map(({ title, resourceName, isPng }, i) => (
                <View style={styles.feelVariant} key={i}>
                    <TouchableNativeFeedback
                        onPress={openPage<RootStackParamList['recommendations']>(StackPages.RECOMMENDATIONS, {
                            params: {
                                title: `Если ты чувствуешь себя ${title.toLowerCase()}`,
                                content: advices[resourceName as keyof typeof advices],
                            },
                        })}
                    >
                        <View style={[styles.feelVariantImageWrapper]}>
                            {isPng ? (
                                <Image source={{ uri: resourceName }} style={styles.feelVariantImage} />
                            ) : (
                                <VectorDrawable resourceName={resourceName} style={styles.feelVariantImage} />
                            )}
                        </View>
                    </TouchableNativeFeedback>
                    <Text style={[styles.text, styles.feelVariantTitle]}>{title}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    },
    feelVariantsWrapper: {
        marginTop: 27,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: -18,
    },
    feelVariant: {
        alignItems: 'center',
    },
    feelVariantImage: {
        width: 35,
        height: 35,
    },
    feelVariantImageWrapper: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        opacity: 0.9,
        marginRight: 26,
    },
    feelVariantTitle: {
        fontSize: 11,
        marginLeft: -26,
        marginTop: 5,
    },
    noRightMargin: {
        marginRight: 0,
    },
    noLeftMargin: {
        marginLeft: 0,
    },
});

export default FeelButtons;
