import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView } from 'react-native-tab-view';
import TabViewExample from './TabView';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ModalStyle() {
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
                            <Text style={styles.textStyle}>Miễn phí phổ biến nhất</Text>
                            <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                            <Text style={styles.textStyle1}>Đạt doanh thu cao nhất</Text>
                            <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                            <Text style={styles.textStyle1}>Trả phí phổ biến nhất</Text>
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
                        <Text style={styles.modalText}>Danh mục</Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible1(!modalVisible1)}
                        >
                            <ScrollView>
                                <Text style={styles.textStyle}>Tất cả các danh mục</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Câu đố</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Chiến thuật</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Dạng bảng</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Đố vui</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Đua xe</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Giáo dục</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Hành động</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Mô phỏng</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Nhạc</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Nhập vai</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Phưu lưu</Text>
                                <View style={{ marginTop: 15, width: '100%', backgroundColor: 'black', height: 1 }}></View>
                                <Text style={styles.textStyle}>Sòng bạc</Text>
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
        marginBottom: -370,
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
        textAlign: 'center'
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
        marginTop: 0

    },
    textStyle1: {
        color: '#6E6E6E',
        fontSize: 20,
        marginTop: 20
    },
    textStyle2: {
        color: "#6E6E6E",
        fontSize: 15,
        marginTop: 0,
        alignItems: 'center',
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
        marginRight: 95
    },
    viewNgang: {
        flexDirection: 'row'
    }
});
