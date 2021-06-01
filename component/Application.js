import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabViewExample from './TabView';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Application() {
    return (
        <View style={styles.viewUngDung}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={{ backgroundColor: '#BDBDBD', height: 1, width: '100 %' }}></View>
                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Đề xuất cho bạn</Text>
                    <Icon name="arrow-right" color="#6E6E6E" size={25} style={{ marginLeft: 210, marginTop: 2 }} />
                </View>

                <View style={styles.viewImage}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.viewExcel}>
                            <Image
                                source={{
                                    uri: 'https://play-lh.googleusercontent.com/ikbN8scDWum2l6zGkmBrLFMsxOQvzTZT6UcIAYJ_dxBDAv9Ub7YE640cliaooDiWMzs',
                                }}
                                style={styles.viewNgang}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Money Manager</Text>
                                    <Text>Quản lí chi tiêu & </Text>
                                    <Text>  65 MB</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewExcel}>
                            <View style={styles.viewShadow}>
                                <Image
                                    source={{
                                        uri: 'https://cdn.tgdd.vn/Files/2021/04/22/1345532/line-la-gi-tim-hieu-dac-diem-cua-ung-dung-nhan-ti-9-489x367.jpg',
                                    }}
                                    style={styles.viewNgang}
                                />
                            </View>
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Gọi và nhắn</Text>
                                    <Text>Viết,chỉnh sửa & </Text>
                                    <Text>  68 MB</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewCanva}>
                            <Image
                                source={{
                                    uri: 'https://bealearner.in/wp-content/uploads/2020/06/Thumbnail.png',
                                }}
                                style={styles.viewNgang}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Canva: Thiết kế đồ</Text>
                                    <Text>hoa,video và chỉnh...</Text>
                                    <Text>25 MB</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewCanva}>
                            <Image
                                source={{
                                    uri: 'https://smartnew.vn/upload_images/images/2020/08/13/iqiyi.png',
                                }}
                                style={styles.viewNgang}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>iQRIYI Video-Phim</Text>
                                    <Text>& TV show</Text>
                                    <Text>51 MB</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewCanva}>
                            <Image
                                source={{
                                    uri: 'https://4.bp.blogspot.com/sbBcbh1BlYEeBrE76leXYi-xCIXvjhAlc8daWcVcgIN4gooSQqPY_UQ5IATX8Ml4pIg',
                                }}
                                style={styles.viewNgang}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Simpler-học Tiếng</Text>
                                    <Text>Anh thật dễ dàng</Text>
                                    <Text>69 MB</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewCanva}>
                            <Image
                                source={{
                                    uri: 'https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8',
                                }}
                                style={styles.viewNgang}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Pinterset:khám</Text>
                                    <Text>phá và lưu giữ tất...</Text>
                                    <Text>22 MB</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewCanva}>
                            <Image
                                source={{
                                    uri: 'https://cdn.tgdd.vn/GameApp/3/224785/Screentshots/lingodeer-hoc-tieng-anh-trung-han-nhat-logo-19-06-2020.png',
                                }}
                                style={styles.viewNgang}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>LingoDeer-Học</Text>
                                    <Text>tiếng Anh,Trung...</Text>
                                    <Text>53 MB</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.viewTextQc}>
                    <Text style={{ marginTop: 5 }}>Quảng cáo .</Text>
                    <Text style={{ fontSize: 20 }}>Được đề xuất cho bạn</Text>
                </View>


                <View style={styles.viewGame}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'data:image/png;base64,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',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>BAEMIN-Ứng</Text>
                                <Text>Dụng Giao Đồ Ăn</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/2/229149/Screentshots/lalamove-ung-dung-giao-hang-sieu-toc-noi-thanh-tai-229149-logo-24-09-2020.png',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Lalamove-Giao</Text>
                                <Text>hàng siêu tốc</Text>
                                <Text> 44 MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://yt3.ggpht.com/ytc/AAUvwnh2Zgfd6IuqLCb0c9potik_-lBScmfGyphMuz4BHw=s900-c-k-c0x00ffffff-no-rj',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Bigo Live-Live</Text>
                                <Text>Stream,Video &</Text>
                                <Text> 62 MB</Text>
                            </View>
                        </View>


                        <View style={styles.viewGame2}>

                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/2020/04/GameApp/hago-200x200.jpg',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>HAGO-game bạn</Text>
                                <Text>bè,game mạng,g..</Text>
                                <Text> 77 MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://pbs.twimg.com/profile_images/1311766254873710592/qOapH6Tl_400x400.jpg',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Tinder kết bạn trực</Text>
                                <Text>tuyến.Hẹn hò trên...</Text>
                                <Text> 47 MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/42/31/ee/4231ee52-6dff-d6ad-a20e-147c8b9cfbd4/AppIcon-Global-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>FxPro Direct-Giao</Text>
                                <Text>dịch trực tuyến</Text>
                                <Text> 17 MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://play-lh.googleusercontent.com/x3XxTcEYG6hYRZwnWAUfMavRfNNBl8OZweUgZDf2jUJ3qjg2p91Y8MudeXumaQLily0',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Twitter</Text>
                                <Text> 27 MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://i.pinimg.com/236x/dc/21/af/dc21afeb504f71739750b5245cc79fcb.jpg',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>WeSing-Miễn Phí</Text>
                                <Text>Hát Karaoke & Th...</Text>
                                <Text> 58 MB</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 15 }}>Vừa cập nhập</Text>

                <View style={styles.viewGame}>
                    <ScrollView horizontal={true}>
                        <View style={styles.viewGame2}>
                            <View>
                                <Image source={{
                                    uri: 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
                                }}
                                    style={styles.viewApp}
                                />
                            </View>

                            <View style={styles.viewText}>
                                <Text>Tik Tok Life</Text>
                                <Text>21 MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://pbs.twimg.com/profile_images/504660843359776768/Vs_oTkrK_400x400.png',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Forest: Stay</Text>
                                <Text>Focused</Text>
                                <Text> 44 MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://play-lh.googleusercontent.com/wweiF4j7oCrolJVXpqaBf7egP7ia8j0nt4b97ebS7BcRRQLLIp6fA3HDX0qT1qd4UQ',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Daylio-Diary,</Text>
                                <Text>Journal,Mood</Text>
                                <Text> 11 MB</Text>
                            </View>
                        </View>


                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/2020/04/GameApp/hago-200x200.jpg',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>HAGO-game bạn</Text>
                                <Text>bè,game mạng,g..</Text>
                                <Text> 77 MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://pbs.twimg.com/profile_images/1311766254873710592/qOapH6Tl_400x400.jpg',
                            }}
                                style={styles.viewApp}
                            />
                            <View style={styles.viewText}>
                                <Text>Tinder kết bạn trực</Text>
                                <Text>tuyến.Hẹn hò trên...</Text>
                                <Text> 47 MB</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    viewUngDung: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewHeader: {
        paddingBottom: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 45,
        borderRadius: 5,
        width: '95%',
        marginLeft: 10,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    input: {
        width: '70%',
        height: '100%',
        marginLeft: 10,
        borderRadius: 5,
        marginRight: 5,
        fontSize: 15,
        alignItems: 'center'
    },
    viewHeader2: {
        marginTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    textHeader: {
        marginTop: 8,
        marginRight: 30,
        fontSize: 17,
        height: 45,
        marginLeft: 10
    },
    viewDX: {
        flexDirection: 'row',
        marginTop: 10
    },

    textDX: {
        fontSize: 20,
        marginLeft: 10
    },
    viewExcel: {
        marginLeft: 10,
        width: windowWidth * 0.26,
        // width: 100,
    },
    viewImage2: {
        marginTop: 15,
    },
    viewCanva: {
        marginLeft: 10
    },
    viewText: {
        marginLeft: 10,
        marginTop: 10
    },
    viewTextQc: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
    },
    viewGame2: {
        marginLeft: 10,
        alignItems: 'center',
    },
    viewShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    viewNgang: {
        width: windowWidth * 0.25,
        height: windowWidth * 0.25,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 5
    },
    viewApp: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 5,
        resizeMode: 'stretch'
    }
})