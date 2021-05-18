import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ width: 20, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ width: 20, backgroundColor: '#673ab7' }} />
);

const DetailRoute = () => (
  <View style={{ width: 20, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  detail: DetailRoute,
});

export default function TabViewExample() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'detail', title: 'Detail' },
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