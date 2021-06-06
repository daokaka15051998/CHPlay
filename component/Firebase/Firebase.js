import * as React from 'react';
import { Text } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState, boolean } from 'react';

import messaging from '@react-native-firebase/messaging'


function FireBase() {
    React.useEffect(() => {
        getFcm();
    });
    const getFcm = async () => {
        let token = await messaging().getToken();
        messaging().onMessage();
        messaging().getInitialNotification();
        console.log('token', token);
    };
    return (
        <Text>Welcome</Text>
    )

}

export default FireBase;