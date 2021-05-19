import React from 'react';
import { View } from 'react-native';
import BottomTab from './component/BottomTab'
import TabViewExample from './component/TabView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Game from './component/Game';


// const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Header" component={Game} /> */}
    //     <Stack.Screen name="TabView" component={TabViewExample} />
    //     <Stack.Screen name="BottomTab" component={BottomTab} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <TabViewExample />

    <BottomTab />

  );
};


export default App;
