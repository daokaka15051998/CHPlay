import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Game1 from './../Game1';
import Application1 from './../Application1';
import Movie1 from './../Movie1';
import Book1 from './../Book1';
const Tab = createBottomTabNavigator();

export default class ButtonMenu extends React.Component {
    constructor() {
        super();
    }
    render() {
        const listMenu = [
            {
                name: 'Game', con: { Game1 }
            }
        ];
        return (
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 15,
                        marginBottom: 5
                    },
                    activeTintColor: 'green',
                    inactiveTintColor: 'black',
                    style: {
                        height: 55,
                    }
                }} >
                {
                    listMenu.map((value, index) => {
                        console.log(value);
                        return (
                            <Tab.Screen name={value.name} component={value.con}
                                options={{
                                    tabBarIcon: () =>
                                        < Entypo name="game-controller" size={20} color='#6E6E6E'
                                        />
                                }}
                            />)
                    })
                }
            </Tab.Navigator>)
    }
}