import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/AntDesign';
import UngDung from './UngDung';
import Phim from './Phim';
import Sach from './Sach';
import TroChoi from './TroChoi';

<TroChoi />;
<UngDung />;
<Phim />;
<Sach />


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
                <Tab.Screen name="Trò Chơi" component={TroChoi}
                    options={{
                        tabBarIcon: ({ color }) => < FontAwesome name="gamepad" size={25} color={color} />
                    }}
                />
                <Tab.Screen name="Ứng Dụng" component={UngDung}
                    options={{
                        tabBarIcon: ({ color }) => < FontAwesome name="heart" size={25} color={color} />
                    }}
                />
                <Tab.Screen name="Phim" component={Phim}
                    options={{
                        tabBarIcon: ({ color }) => < FontAwesome name="film" size={25} color={color} />
                    }}
                />
                <Tab.Screen name="Sách" component={Sach}
                    options={{
                        tabBarIcon: ({ color }) => < FontAwesome name="book" size={25} color={color} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
