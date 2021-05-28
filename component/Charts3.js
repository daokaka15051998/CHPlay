import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalStyle from './ModalStyle';
import Application from './Application';
import Icons from '../component/icon';


import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Charts3(navigation) {
    return (

        <View style={styles.view1}>

            <ScrollView>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <ScrollView horizontal={true}>
                        <ModalStyle />
                    </ScrollView>
                </View>
                <TouchableOpacity>
                    < View style={styles.view2} >
                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>1</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>
                        <Icons.Feather name="book" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Bộ sưu tập và văn học</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>2</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>
                        <Icons.SimpleLineIcons name="plane" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Du lịch</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>3</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>
                        <Icons.Ionicons name="cart" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Gia đình và nuôi dậy con</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>4</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Icons.Feather name="book" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Giáo dục</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>5</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Icons.Entypo name="lab-flask" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Khoa học và toán học</Text>
                        </View>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>6</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Icons.Octicons name="rocket" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Khoa học viễn tưởng và giả tưởng</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>7</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>
                        <Icons.MaterialIcons name="computer" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Máy tính công nghệ</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>8</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>
                        <Icons.Entypo name="network" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Lịch sử</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>9</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Icons.Ionicons name="bar-chart" color="blue" size={40} style={{ marginLeft: 8, marginTop: 25 }} />
                        <View style={styles.viewChu2}>
                            <Text>Kinh doanh và đầu tư</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >
    );

}

const styles = StyleSheet.create({
    view1: {
        flex: 1,
    },
    view2: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 20

    },
    viewChu: {
        flexDirection: 'column',
        marginTop: 30
    },
    viewChu2: {
        marginLeft: 15,
        marginTop: 33
    },
    imagegame: {
        width: windowWidth * 0.17,
        height: windowWidth * 0.25,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 15
    }
})