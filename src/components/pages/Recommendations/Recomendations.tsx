import { RootStackParamList, StackPages } from '@components/navigation/StackNavigator/types';
import Text from '@components/ui/Text';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Recommendations: FC<BottomTabScreenProps<RootStackParamList, StackPages.RECOMMENDATIONS>> = (props) => {
    const { title, content } = props.route.params;

    return (
        <View style={styles.page}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.text, styles.title]}>{title}</Text>
                <Text style={[styles.text, styles.content]}>{content}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#253334',
    },

    container: {
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    text: {
        color: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
    },
    content: {
        fontSize: 18,
        marginTop: 15,
    },
});

export default Recommendations;
