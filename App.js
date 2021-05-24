import React from 'react';
import { View, Header, Text } from 'react-native';
import BottomTab from './component/BottomTab'
import TabViewExample from './component/TabView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Game from './component/Game';
import ViewHeader from './component/ViewHeader';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
// import BottomTab from './component/BottomTab';


const Stack = createStackNavigator();
const Drawer = createStackNavigator();

const App = () => {
  return (
    <BottomTab />
  );
};


export default App;
