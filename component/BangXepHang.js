import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function BangXepHang() {
    return (
        <View >

            <View style={styles.viewHeader}>
                <Icon name="search" color="black" size={25} style={{ marginTop: 6, marginLeft: 10, marginBottom: 5 }} />
                <TextInput style={styles.input} />
                <Icon name="microphone" color="black" size={25} style={{ marginTop: 6, marginRight: 0, marginBottom: 5 }} />
                <Image source={require('./daonv1.png')}
                    style={{ width: 30, height: 30, marginTop: 5, marginLeft: 10 }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

})