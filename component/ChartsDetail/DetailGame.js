// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '../icon';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function DetailGame() {

    return (

        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={styles.view1}>
                    <Image
                        source={{
                            uri: 'https://e.dowload.vn/data/image/2021/05/25/Catwalk-Beauty-200.jpg',
                        }}
                        style={styles.imageGame}
                    />
                    <View style={styles.viewText}>

                        <Text style={{ fontSize: 20 }}>CatWalk Beauty</Text>
                        <Text style={{ fontSize: 14, color: 'green' }}>Smilage</Text>
                        <Text style={{ fontSize: 13 }}>Chứa quảng cáo</Text>
                        <Text style={{ fontSize: 13 }}>Mua hàng trong ứng dụng</Text>
                    </View>
                </View>

                <View style={styles.view2}>
                    <ScrollView horizontal={true}>
                        <View style={styles.viewText1} >
                            <Text style={styles.textCenter}>4,4 *</Text>
                            <Text>53 N bài đánh giá</Text>
                        </View>

                        <View style={styles.viewText2} >

                            <Icon.MaterialCommunityIcons name="download-box-outline" color="#6E6E6E" size={25} style={{ marginLeft: 8, marginTop: 2 }} />

                            <Text>75 MB</Text>
                        </View>
                        <View style={styles.viewText2} >
                            <MaterialCommunityIcons name="download-box-outline" color="#6E6E6E" size={25} style={{ marginLeft: 60, marginTop: 2 }} />
                            <Text>Lựa chọn của biên tập viên</Text>
                        </View>
                        <View style={styles.viewText2} >
                            <MaterialCommunityIcons name="download-box-outline" color="#6E6E6E" size={25} style={{ marginLeft: 70, marginTop: 2 }} />
                            <Text>Không phù hợp cho trẻ dưới 12 tuổi !</Text>
                        </View>
                        <View style={styles.viewText1} >
                            <Text style={{ fontSize: 15 }}>Hơn 500 Tr</Text>
                            <Text>Lượt tải xuống</Text>
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.viewCD}>
                    <Text style={styles.textCd}>Cài đặt</Text>
                </View>
                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>
                        <Image
                            source={{
                                uri: 'https://play-lh.googleusercontent.com/6hFXF1QNiW_MGiqua8OghDjMEYtj0L4g_GJD53Esue3JSr6sryEQ-upm9M29RTMKRc8',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://i.ytimg.com/vi/gpGF1n2Tmjs/maxresdefault.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://i.ytimg.com/vi/g1DQ7G4A1RQ/maxresdefault.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://i.ytimg.com/vi/npW9AR4ZG9U/maxresdefault.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                    </ScrollView>
                </View>
                <View style={styles.viewDx}>
                    <Text style={{ fontSize: 18 }}>Về trò chơi này</Text>
                    <AntDesign name="arrowright" color="#6E6E6E" size={25} style={{ marginLeft: 150, marginTop: 2 }} />
                </View>
                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                    Xin chào cô gái xinh đẹp, đã đến lúc diễn rồi
            </Text>

                <View style={styles.viewNgang}>
                    <ScrollView horizontal={true}>
                        <View style={styles.viewFree}>
                            <Text style={styles.textfree}>#1 miễn phí phổ biến nhất trong game thể thao</Text>
                        </View>
                        <View style={styles.viewFree}>
                            <Text style={styles.textfree}>Bi-a</Text>
                        </View>
                        <View style={styles.viewFree}>
                            <Text style={styles.textfree}>Không cần Internet</Text>
                        </View>
                        <View style={styles.viewFree}>
                            <Text style={styles.textfree}>Một người chơi</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.viewDx}>
                    <Text style={{ fontSize: 18 }}>Xếp hạng và đánh giá</Text>
                    <AntDesign name="arrowright" color="#6E6E6E" size={25} style={{ marginLeft: 150, marginTop: 2 }} />
                </View>
                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>
                        <Image
                            source={{
                                uri: 'https://play-lh.googleusercontent.com/6hFXF1QNiW_MGiqua8OghDjMEYtj0L4g_GJD53Esue3JSr6sryEQ-upm9M29RTMKRc8',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/d6/ac/73/d6ac7371-ce8f-02d6-e193-e4bd7eb1da5b/bdb5aa0d-2e91-42c4-b0c9-b5ca591662f9_Catwalk_Qiuqiao_05_2048x2732.jpg/643x0w.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://i.ytimg.com/vi/Yl-Xi-FWDkU/maxresdefault.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://i.ytimg.com/vi/g1DQ7G4A1RQ/maxresdefault.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                    </ScrollView>
                </View>

            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        flexDirection: 'row'
    },
    imageGame: {
        height: windowWidth * 0.17,
        width: windowWidth * 0.17,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 10
    },
    viewText: {
        marginLeft: 20
    }
    ,
    view2: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 20,
    },
    viewText1: {
        marginHorizontal: 20,
        marginTop: 8
    },
    viewText2: {
        marginHorizontal: 20,
        marginTop: 0
    },
    textCenter: {
        marginLeft: 40
    },
    viewCD: {
        marginLeft: 20,
        backgroundColor: 'green',
        width: '90%',
        height: windowWidth * 0.1,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textCd: {
        color: 'white',
        textAlign: 'center',
    },
    viewImage: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 15,

    },
    imageGame2: {
        width: windowWidth * 0.8,
        height: windowWidth * 0.4,
        borderRadius: 10,
        marginHorizontal: 10,
        resizeMode: 'stretch'
    },
    viewDx: {
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row'
    },
    viewNgang: {
        flexDirection: 'row'
    },
    viewFree: {
        marginLeft: 20,
        backgroundColor: 'white',
        height: windowWidth * 0.07,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textfree: {
        color: 'black',
        marginHorizontal: 10,
    }
})