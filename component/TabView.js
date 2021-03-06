import { BottomTabBar } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Application from './Application';
import Game from './Game';
import Movie from './Movie';
import Book from './Book';
import ViewHeader from './ViewHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Charts from './Charts';


export default function TabViewExample() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Cho Bạn' },
    { key: 'second', title: 'Bảng Xếp Hạng' },
    { key: 'detail', title: 'Có Tính Phí' },
    { key: 'family', title: 'Gia Đình' },
    { key: 'bientap', title: 'Lựa Chọn Biên Tập Viên' },
  ]);

  const renderTabBar = (props) => {
    return <TabBar
      {...props}
      scrollEnabled
      tabStyle={{
        backgroundColor: 'white',
        height: 60,
        width: 'auto',

      }}
      getLabelText={({ route }) => route.title}
      renderLabel={({ route, focused, }) => (
        <TouchableOpacity>
          <Text style={{ color: focused ? 'green' : 'black', flexDirection: 'row-reverse', marginLeft: 25 }}>
            {route.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  }


  return (
    <View flex={1} back>
      <ViewHeader />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: Game,
          second: Charts,
          detail: Movie,
          family: Book,
          bientap: Application,
        })}
      />

    </View>

  );
}