import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView } from 'react-native-tab-view';
import TabViewExample from './TabView';

export default function Movie1() {
    return (
        <TabViewExample />
    );

}


const styles = StyleSheet.create({

})