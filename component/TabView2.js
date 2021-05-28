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
import Charts3 from './Charts2';
import Charts2 from './Charts2';

export default function TabViewExample2() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'Cho Bạn' },
        { key: 'second', title: 'Bán chạy nhất' },
        { key: 'detail', title: 'Mới phát hành' },
        { key: 'family', title: 'Thể loại' },
        { key: 'bientap', title: 'Hãng phim' },
    ]);

    const renderTabBar = (props) => {
        return <TabBar
            {...props}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            scrollEnabled
            tabStyle={{
                backgroundColor: 'white',
                height: 60,
                width: 'auto',

            }}
            getLabelText={({ route }) => route.title}
            renderLabel={({ route, focused, color }) => (
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
                    first: Movie,
                    second: Charts2,
                    detail: Application,
                    family: Book,
                    bientap: Game,
                })}
            />

        </View>

    );
}