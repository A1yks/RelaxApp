import React, { FC, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Profile: FC = () => {
    useEffect(() => {
        console.log(11);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('@images/profile.png')} style={styles.profileImage} />
            <Text style={styles.profileName}>Profile name</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253334',
        flex: 1,
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
    },
});

export default Profile;
