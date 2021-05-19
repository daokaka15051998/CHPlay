import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Game from './Game';
import Application from './Application';
import Movie from './Movie';
import Book from './Book';

<Game />;
<Application />;
<Movie />;
<Book />


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                labelStyle: {
                    fontSize: 15,
                },
                activeTintColor: 'green',
                inactiveTintColor: 'black'
            }} >
                <Tab.Screen name="Trò Chơi" component={Game}
                    options={{
                        tabBarIcon: ({ color }) => < Entypo name="game-controller" size={25} color={color} />
                    }}
                />
                <Tab.Screen name="Ứng Dụng" component={Application}
                    options={{
                        tabBarIcon: ({ color }) => < AntDesign name="appstore1" size={25} color={color} />
                    }}
                />
                <Tab.Screen name="Phim" component={Movie}
                    options={{
                        tabBarIcon: ({ color }) => < FontAwesome name="film" size={25} color={color} />
                    }}
                />
                <Tab.Screen name="Sách" component={Book}
                    options={{
                        tabBarIcon: ({ color }) => < AntDesign name="book" size={25} color={color} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
