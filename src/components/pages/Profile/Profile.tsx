import { useUserContext } from 'context/UserContext';
import React, { FC, useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Text from '@components/ui/Text';
import Photo from './Photo';

const Profile: FC = () => {
    const { name, photos } = useUserContext();

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            <View>
                <Image source={require('@images/profile.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>{name}</Text>
            </View>
            <View style={styles.photosWrapper}>
                {photos.map((uri) => (
                    <Photo key={uri} src={uri} style={styles.photo} />
                ))}
                <Photo type="upload" style={styles.photo} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#253334',
    },
    container: {
        paddingHorizontal: 25,
        alignItems: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
    },
    profileName: {
        color: '#fff',
        fontSize: 35,
        marginTop: 8,
        fontWeight: '500',
        textAlign: 'center',
    },
    photosWrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
    },
    photo: {
        width: '47%',
        marginTop: 20,
    },
});

export default Profile;
