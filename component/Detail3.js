// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '../component/icon';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Detail3() {
    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.view1}>
                    <Image
                        source={{
                            uri: 'https://static.download-vn.com/com.miniclip.eightballpool-thumbnail.png',
                        }}
                        style={styles.imageGame}
                    />
                    <View style={styles.viewText}>

                        <Text style={{ fontSize: 20 }}>8 Ball Pool</Text>
                        <Text style={{ fontSize: 14, color: 'green' }}>Miniclip.com</Text>
                        <Text style={{ fontSize: 13 }}>Chứa quảng cáo</Text>
                        <Text style={{ fontSize: 13 }}>Mua hàng trong ứng dụng</Text>
                    </View>
                </View>

                <View style={styles.view2}>
                    <ScrollView horizontal={true}>
                        <View style={styles.viewText1} >
                            <Text style={styles.textCenter}>4,4 *</Text>
                            <Text>21 Tr bài đánh giá</Text>
                        </View>

                        <View style={styles.viewText2} >

                            <Icon.MaterialCommunityIcons name="download-box-outline" color="#6E6E6E" size={25} style={{ marginLeft: 8, marginTop: 2 }} />

                            <Text>61 MB</Text>
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
                                uri: 'https://cdn.tgdd.vn/2020/04/content/Ball8-1-720x450.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/221132/Screentshots/8-ball-pool-tro-choi-bida-dinh-cao-noi-the-hien-ky-nang-cua-ban-01-05-2021-1.png',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaFVYi2vEpMmSf6mPeuGKyewDA9BtyJuJsDXA7_wvwyE0EU5NJxJzdiuAsE9VBEcoazw&usqp=CAU',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTOFdLybJrYngvsV7lCqWDVYTE12MhD4HjA&usqp=CAU',
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
                    Chơi game bi-da số 1 thế giới
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
                                uri: 'https://cdn.tgdd.vn/Files/2021/04/07/1341407/cach-tai-vo-lam-truyen-ky-1-mobile_800x450.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://start.vng.com.vn/wp-content/uploads/2021/04/VLTK-1-mobile-cover.png',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://img.zing.vn/upload/jx1m/source/News/Mainsite/slide/s2.jpg',
                            }}
                            style={styles.imageGame2}
                        />
                        <Image
                            source={{
                                uri: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2020_12_22/image008.jpg',
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