import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function ViewHeader() {
    return (
        <View style={styles.viewHeader}>
            <Icon name="search" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
            <TextInput placeholder="Tìm kiếm" style={styles.input} />
            <Feather name="mic" color="#6E6E6E" size={20} style={{ marginTop: 10, marginRight: -5, marginBottom: 5 }} />
            <Image source={require('../assets/image/daonvtron.png')}
                style={{ width: 40, height: 40, marginTop: -3, marginLeft: 8, marginRight: 10 }}
            />
        </View>

    );
};


const styles = StyleSheet.create({
    viewHeader: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 45,
        borderRadius: 5,
        width: '95%',
        marginLeft: 10,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    input: {
        width: '70%',
        height: '100%',
        marginLeft: 10,
        borderRadius: 5,
        marginRight: 5,
        fontSize: 15,
        alignItems: 'center'
        // placeholder="Tìm kiếm ứng dụng và trò chơi",
    },
})

