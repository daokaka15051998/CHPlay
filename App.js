import React from 'react';
import { View, Header, Text, Button, SafeAreaView } from 'react-native';
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
import { enableScreens } from 'react-native-screens';
import DetailGame from './component/ChartsDetail/DetailGame';
import Camera from './component/Camera/Camera';
import SafeView from './component/Camera/SafeView';
import ModalStyle from './component/ModalStyle';
import Charts from './component/Charts';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
const Stack = createStackNavigator();

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });

const App = () => {

  // React.useEffect(() => {
  //   getFcm();
  // }, []);
  // const getFcm = async () => {
  //   let token = await messaging().getToken();
  //   messaging().onMessage();
  //   messaging().getInitialNotification();
  //   console.log('test', token);

  // };


  // React.useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);


  // React.useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <NavigationContainer style={{ with: 0 }}>
      <Stack.Navigator headerMode='none'>
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
        <Stack.Screen name="DetailGame" component={DetailGame} options={{ title: '' }} />
        <Stack.Screen name="SafeView" component={SafeView} options={{ title: '' }} />
        <Stack.Screen name="Camera" component={Camera} options={{ title: '' }} />
        <Stack.Screen name="Modal" component={ModalStyle} options={{ title: '' }} />
        <Stack.Screen name="Chart" component={Charts} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
