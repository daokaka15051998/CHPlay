import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Game1 from './Game1';
import Application1 from './Application1';
import Movie1 from './Movie1';
import Book1 from './Book1';
import Application from './Application';

const Tab = createBottomTabNavigator();

export default function App() {
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

            <Tab.Screen name="Trò Chơi" component={Game1}
                options={{
                    tabBarIcon: () =>
                        < Entypo name="game-controller" size={20} color='#6E6E6E'
                        />
                }}
            />

            <Tab.Screen name="Ứng Dụng" component={Application1}
                options={{
                    tabBarIcon: () => < AntDesign name="appstore1" size={20} color='#6E6E6E' />
                }}
            />
            <Tab.Screen name="Phim" component={Movie1}
                options={{
                    tabBarIcon: () => < FontAwesome name="film" size={20} color='#6E6E6E' />,

                }}
            />
            <Tab.Screen name="Sách" component={Book1}

                options={{
                    tabBarIcon: () => < AntDesign name="book" size={20} color='#6E6E6E' />
                }}
            />
        </Tab.Navigator>
    );
}
