import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Modal, Pressable, Button } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView } from 'react-native-tab-view';
import TabViewExample from './TabView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Charts from './Charts';
import { color } from 'react-native-reanimated';


import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function ModalStyle() {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = React.useState(false);

    const [modalVisible1, setModalVisible1] = React.useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Bảng xếp hạng hàng đầu</Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStylee}>Miễn phí phổ biến nhất</Text>
                            <Text style={styles.textStylee1}>Đạt doanh thu cao nhất</Text>
                            <Text style={styles.textStylee1}>Trả phí phổ biến nhất</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible1(!modalVisible1);
                }}
            >
                <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => setModalVisible1(!modalVisible1)} >
                                <Icon name="close" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Danh mục</Text>
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                        >
                            <ScrollView>
                                <Text style={styles.textStyle}>Tất cả các danh mục</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <TouchableOpacity>
                                    <View style={styles.viewDM}>
                                        <AntDesign name="CodeSandbox" color="green" size={20} style={styles.iconDm} />
                                        <Text style={styles.textStyle}>Câu đố</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <Entypo name="dropbox" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Chiến thuật</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <FontAwesome5 name="chess" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Dạng bảng</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <FontAwesome5 name="hourglass-start" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Đố Vui</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <AntDesign name="CodeSandbox" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Đua xe</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <AntDesign name="book" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Giáo dục</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <MaterialCommunityIcons name="helicopter" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Hành động</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <AntDesign name="CodeSandbox" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Mô phỏng</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <Entypo name="music" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Nhạc</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <Entypo name="music" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Thẻ bài</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <MaterialIcons name="sports-soccer" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Thể thao</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <MaterialIcons name="sports-soccer" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Thể thao</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <View style={styles.viewDM}>
                                    <MaterialIcons name="sports-soccer" color="green" size={20} style={styles.iconDm} />
                                    <Text style={styles.textStyle}>Thể thao</Text>
                                </View>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                            </ScrollView>
                        </Pressable>
                    </View>
                </View>
            </Modal>


            <View style={styles.viewNgang}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}

                >
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Text style={styles.textStyle2}>Miễn phí phổ biến nhất</Text>
                        <AntDesign name="caretdown" color="#6E6E6E" size={10} style={{ marginTop: 3, marginLeft: 10, marginBottom: 5 }} />
                    </View>
                </Pressable>

                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible1(true)}
                >
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Text style={styles.textStyle2}>Danh mục</Text>
                        <AntDesign name="caretdown" color="#6E6E6E" size={10} style={{ marginTop: 3, marginLeft: 10, marginBottom: 5 }} />
                    </View>
                </Pressable>

                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <View style={{ marginLeft: 20, alignItems: 'center', }}>
                        <Text style={styles.textStyle3}>Mới</Text>
                    </View>
                </Pressable>

            </View>
        </View >

    );

}

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    modalView: {
        marginBottom: windowWidth * -0.5,
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    modalView1: {
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft: 15,
    },
    buttonOpen: {
        marginTop: -5,
        backgroundColor: "white",
        marginBottom: 7,
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonClose: {
        backgroundColor: "white",
        width: '110%'
    },
    buttonClose1: {
        backgroundColor: "white",
        width: '200%'
    },
    textStyle: {
        color: "#6E6E6E",
        fontSize: 20,
        marginTop: 13,
    },
    textStyle1: {
        color: '#6E6E6E',
        fontSize: 20,
        marginTop: 20,
    },
    textStyle2: {
        color: "#6E6E6E",
        fontSize: 15,
        marginTop: 0,
        alignItems: 'center',
    },
    textStylee: {
        color: "#6E6E6E",
        fontSize: 20,
        marginTop: 13,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        height: 40
    },
    textStylee1: {
        color: '#6E6E6E',
        fontSize: 20,
        marginTop: 20,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        height: 40
    },
    textStylee2: {
        color: "#6E6E6E",
        fontSize: 15,
        marginTop: 0,
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        height: 40
    },
    textStyle3: {
        color: "#6E6E6E",
        fontSize: 15,
        marginTop: 0,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 20,
        fontSize: 22,
        marginRight: 95,
        marginLeft: 40,


    },
    viewNgang: {
        flexDirection: 'row'
    },
    viewDM: {
        flexDirection: 'row',
        marginLeft: 10
    },
    iconDm: {
        marginTop: 16,
        marginRight: 10
    }
});
