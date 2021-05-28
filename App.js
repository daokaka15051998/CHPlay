import React from 'react';
import { View, Header, Text, Button } from 'react-native';
import BottomTab from './component/BottomTab'
import TabViewExample from './component/TabView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Game from './component/Game';
import ViewHeader from './component/ViewHeader';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Book from './component/Book';
import Detail from './component/Detail';
import TabViewExample3 from './component/TabView3';
import Book1 from './component/Book1';
import Game1 from './component/Game1';
import Detail1 from './component/Detail1';
import Detail2 from './component/Detail2';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ title: '' }} />
        <Stack.Screen name="Game1" component={Game1} />
        <Stack.Screen name="Tabview" component={TabViewExample} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Book1" component={Book1} />
        <Stack.Screen name="Tabview3" component={TabViewExample3} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: '' }} />
        <Stack.Screen name="Detail1" component={Detail1} options={{ title: '' }} />
        <Stack.Screen name="Detail2" component={Detail2} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
