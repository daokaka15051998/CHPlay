import { BottomTabBar } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Game from './Game';

const FirstRoute = () => (
  <View style={{ height: 0, backgroundColor: '#673ab7' }} />
);
const SecondRoute = () => (
  <View style={{ height: 0, backgroundColor: '#673ab7' }} />
);
const DetailRoute = () => (
  <View style={{ height: 0, backgroundColor: 'pink' }} />
);
const Family = () => (
  <View style={{ height: 0, backgroundColor: 'black' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  detail: DetailRoute,
  family: Family,
});

export default function TabViewExample() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Cho Bạn' },
    { key: 'second', title: 'Bảng Xếp Hạng' },
    { key: 'detail', title: 'Có Tính Phí' },
    { key: 'family', title: 'Gia Đình' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}