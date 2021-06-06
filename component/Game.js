import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView } from 'react-native-tab-view';
import { Dimensions } from 'react-native';
import Detail from './Detail';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


<Detail />
export default function Game() {
    const navigation = useNavigation()
    return (

        <View style={styles.viewTroChoi}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={{ backgroundColor: '#BDBDBD', height: 1, width: '100 %' }}></View>
                <View style={styles.viewDX}>
                    <TouchableOpacity onPress={() => navigation.navigate('SafeView')}>
                        <Text style={styles.textDX}>Chụp ảnh siêu net full HD</Text>
                        <Icon name="arrow-right" color="#6E6E6E" size={25} style={{ marginLeft: 10, marginTop: 2 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewImage}>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


                        <View style={styles.viewBia}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <Image
                                    source={{
                                        uri: 'https://cdn.tgdd.vn/GameApp/3/221132/Screentshots/8-ball-pool-tro-choi-bida-dinh-cao-noi-the-hien-ky-nang-cua-ban-01-05-2021-0.png',
                                    }}
                                    style={styles.imageGame}
                                />
                                <View style={styles.viewImage2} >
                                    <Image source={{
                                        uri: 'https://static.download-vn.com/com.miniclip.eightballpool-thumbnail.png',
                                    }}
                                        style={{ width: windowWidth * 0.11, height: windowWidth * 0.11, marginTop: 20, borderRadius: 10 }}
                                    />
                                    <View style={styles.viewText}>
                                        <Text>8 Ball Pool</Text>
                                        <Text>Thể Thao . Bi-a</Text>
                                        <Text> 4.4 * 60 MB</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>



                        <View style={styles.viewRuneterra}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <Image
                                    source={{
                                        uri: 'https://gamek.mediacdn.vn/zoom/780_295/133514250583805952/2020/11/25/lor-banner-16062792690151811515922.jpg',
                                    }}
                                    style={styles.imageGame}
                                />
                                <View style={styles.viewImage2} >
                                    <Image source={{
                                        uri: 'https://i.ytimg.com/vi/rPrgrwNARvE/maxresdefault.jpg',
                                    }}
                                        style={{ width: windowWidth * 0.11, height: windowWidth * 0.11, marginTop: 20, borderRadius: 10 }}
                                    />
                                    <View style={styles.viewText}>
                                        <Text>Huyền Thoại Runeterra</Text>
                                        <Text>Thẻ bài . None</Text>
                                        <Text> 4.3 * 67 MB</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>


                        <View style={styles.viewRuneterra}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <Image
                                    source={{
                                        uri: 'https://play-lh.googleusercontent.com/KOJrBveCPD9tAPwB8bc56E_DujYLulkr6uWV4FRR8khMheYclRb_JGuGAHSJE6rHzdo',
                                    }}
                                    style={styles.imageGame}
                                />
                                <View style={styles.viewImage2} >
                                    <Image source={{
                                        uri: 'https://play-lh.googleusercontent.com/KOJrBveCPD9tAPwB8bc56E_DujYLulkr6uWV4FRR8khMheYclRb_JGuGAHSJE6rHzdo',
                                    }}
                                        style={{ width: windowWidth * 0.11, height: windowWidth * 0.11, borderRadius: 10 }}
                                    />
                                    <View style={styles.viewText}>
                                        <Text>Võ Lâm Truyền Kỳ 1</Text>
                                        <Text>Mobie</Text>
                                        <Text>0.95 GB</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.viewRuneterra}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
                                <Image
                                    source={{
                                        uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                    }}
                                    style={styles.imageGame}
                                />
                                <View style={styles.viewImage2} >
                                    <Image source={{
                                        uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                    }}
                                        style={{ width: windowWidth * 0.11, height: windowWidth * 0.11, borderRadius: 10 }}
                                    />
                                    <View style={styles.viewText}>
                                        <Text>Thợ Săn Ma 3D</Text>
                                        <Text>Mobie</Text>
                                        <Text>0.95 GB</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewRuneterra}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <Image
                                    source={{
                                        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446890/capsule_616x353.jpg?t=1618732004',
                                    }}
                                    style={styles.imageGame}
                                />
                                <View style={styles.viewImage2} >
                                    <Image source={{
                                        uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446890/capsule_616x353.jpg?t=1618732004',
                                    }}
                                        style={{ width: windowWidth * 0.11, height: windowWidth * 0.11, borderRadius: 10 }}
                                    />
                                    <View style={styles.viewText}>
                                        <Text>ShaDow Fight</Text>
                                        <Text>Mobie</Text>
                                        <Text>0.95 GB</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                }}
                                style={styles.imageGame}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                }}
                                    style={{ width: windowWidth * 0.11, height: windowWidth * 0.11, borderRadius: 10 }}
                                />
                                <View style={styles.viewText}>
                                    <Text>Thợ Săn Ma 3D</Text>
                                    <Text>Mobie</Text>
                                    <Text>0.95 GB</Text>
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
                            <TouchableOpacity onPress={() => navigation.navigate('Detail1')}>
                                <Image source={{
                                    uri: 'https://play-lh.googleusercontent.com/KOJrBveCPD9tAPwB8bc56E_DujYLulkr6uWV4FRR8khMheYclRb_JGuGAHSJE6rHzdo',
                                }}
                                    style={styles.imageGame2}
                                />
                                <View style={styles.viewText}>
                                    <Text>Võ Lâm Truyền Kỳ 1 Mobie</Text>
                                    <Text> 0.95 GB</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.viewGame2}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail1')}>
                                <Image source={{
                                    uri: 'https://play.2game.vn/static/attachment/game/20210409/1617940996298609.jpg',
                                }}
                                    style={styles.imageGame2}
                                />
                                <View style={styles.viewText}>
                                    <Text>Forsaken Word:Thần Ma Đao</Text>
                                    <Text> 667MB</Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail1')}>
                            <View style={styles.viewGame2}>
                                <Image source={{
                                    uri: 'https://upload.afkmobi.com/photos/afkmobi-com/2021/04/afkmobi_logo_tan_giang_ho_truyen_ky_mobile_ban_hd_chuan.png',
                                }}
                                    style={styles.imageGame2}
                                />
                                <View style={styles.viewText}>
                                    <Text>Võ Lâm Truyền Kỳ 1 Mobie</Text>
                                    <Text> 311MB</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/233131/Screentshots/mu-vuot-thoi-dai-funtap-233131-logo-30-12-2020.png',
                            }}
                                style={styles.imageGame2}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại- Funtap</Text>
                                <Text> 98 MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn//GameApp/1346204//3-cach-nap-the-luyen-yeu-ky-nhanh-chong-don-gian-thumb-800x450.jpg',
                            }}
                                style={styles.imageGame2}
                            />
                            <View style={styles.viewText}>
                                <Text>Luyện Yêu Ký Games</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/220297/Screentshots/candy-crush-soda-saga-tro-choi-keo-ngot-logo-19-05-2020.png',
                            }}
                                style={styles.imageGame2}
                            />
                            <View style={styles.viewText2}>
                                <Text>Candy Crush Soda Saga</Text>
                                <Text> 62 MB</Text>
                            </View>
                        </View>


                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.game.tv/game-tv-content/images_2/mobile/game_banner/03989854ff11b7dd541caf55f3fb1ae3/en/03989854ff11b7dd541caf55f3fb1ae3.jpg',
                            }}
                                style={styles.imageGame2}
                            />
                            <View style={styles.viewText}>
                                <Text>Summpners War Lost Centuria</Text>
                                <Text> 897 MB</Text>
                            </View>
                        </View>


                    </ScrollView>
                </View>

                <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 20 }}>Khám phá các trò chơi được đề xuất </Text>

                <View style={styles.viewGame}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/220297/Screentshots/candy-crush-soda-saga-tro-choi-keo-ngot-logo-19-05-2020.png',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText2}>
                                <Text>Candy Crush Soda Saga</Text>
                                <Text> 62 MB</Text>
                            </View>
                        </View>


                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.game.tv/game-tv-content/images_2/mobile/game_banner/03989854ff11b7dd541caf55f3fb1ae3/en/03989854ff11b7dd541caf55f3fb1ae3.jpg',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>Summpners War Lost Centuria</Text>
                                <Text> 897 MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://upload.afkmobi.com/photos/afkmobi-com/2021/04/afkmobi_logo_tan_giang_ho_truyen_ky_mobile_ban_hd_chuan.png',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>Võ Lâm Truyền Kỳ 1 Mobie</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>


                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn//GameApp/1346204//3-cach-nap-the-luyen-yeu-ky-nhanh-chong-don-gian-thumb-800x450.jpg',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>Luyện Yêu Ký Games</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/233131/Screentshots/mu-vuot-thoi-dai-funtap-233131-logo-30-12-2020.png',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại- Funtap</Text>
                                <Text> 98 MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn//GameApp/1346204//3-cach-nap-the-luyen-yeu-ky-nhanh-chong-don-gian-thumb-800x450.jpg',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>Luyện Yêu Ký Games</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/233131/Screentshots/mu-vuot-thoi-dai-funtap-233131-logo-30-12-2020.png',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại- Funtap</Text>
                                <Text> 98 MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn//GameApp/1346204//3-cach-nap-the-luyen-yeu-ky-nhanh-chong-don-gian-thumb-800x450.jpg',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>Luyện Yêu Ký Games</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/233131/Screentshots/mu-vuot-thoi-dai-funtap-233131-logo-30-12-2020.png',
                            }}
                                style={styles.imageGame3}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại- Funtap</Text>
                                <Text> 98 MB</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
                <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 20 }}>Trò chơi phổ thông </Text>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail2')}>
                            <View style={styles.viewPB}>
                                <Image source={{
                                    uri: 'https://linkerpt.com/wp-content/uploads/2017/06/games-candy-crush-jelly-saga-v1-44-08-mod-cho-android.png',
                                }}
                                    style={styles.imageGame4}
                                />

                                <View style={styles.viewImage3}>
                                    <Image source={{
                                        uri: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/ce/8e/05/ce8e0556-6566-8a33-c3d0-52f5ba6fe61d/source/200x200bb.jpg',
                                    }}
                                        style={styles.imageGame5}
                                    />
                                    <View style={styles.viewTextGame}>
                                        <Text>Candy Crush Jelly Saga</Text>
                                        <Text>Giải đố . Xếp hình 3 khố. Phổ thông</Text>
                                        <Text>4,5 * 84MB</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewPB}>
                            <Image source={{
                                uri: 'https://lh3.googleusercontent.com/rs6pgFZ4Zxxp2qAtcUDIZw8q9D7V6Pgj90NC3UrCL_6_cdeucARHAVGtEsGfGZ_6Ew',
                            }}
                                style={styles.imageGame4}
                            />

                            <View style={styles.viewImage3}>
                                <Image source={{
                                    uri: 'https://zoapk.com/wp-content/uploads/2020/08/C%C3%A2u-c%C3%A1-v%C3%A0-cu%E1%BB%99c-s%E1%BB%91ng-MOD-H1.png',
                                }}
                                    style={styles.imageGame5}
                                />
                                <View style={styles.viewTextGame}>
                                    <Text>Câu cá và cuộc sống</Text>
                                    <Text>Thể thao.Mô phỏng. Phổ thông</Text>
                                    <Text>4,3 * 74 MB - Lựa chọn của biên tập viên</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewPB}>
                            <Image source={{
                                uri: 'https://cdn.apkmody.io/uploads/2018/07/Hungry-Shark-World-download.jpg',
                            }}
                                style={styles.imageGame4}
                            />

                            <View style={styles.viewImage3}>
                                <Image source={{
                                    uri: 'https://wmpgameoffline.com/wp-content/uploads/2020/06/Free-Download-Hungry-Shark-World-3.9.2-APK.png',
                                }}
                                    style={styles.imageGame5}
                                />
                                <View style={styles.viewTextGame}>
                                    <Text>Hunry Shark World</Text>
                                    <Text>Trò chơi điện tử.Phổ thông</Text>
                                    <Text>4,5 * 144MB-Lựa chọn của biên tập viên</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>


            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    viewTroChoi: {
        flex: 1,
        backgroundColor: 'white'
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
        fontSize: windowWidth * 0.05,
        marginLeft: 10
    },
    viewImage: {
        backgroundColor: 'white',
        height: windowHeight * 0.34,
        marginLeft: 10,
    },
    viewImage2: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    viewText: {
        marginLeft: 10,
        paddingTop: 10,
    },
    viewBia: {
        marginLeft: 5,
        width: windowWidth * 0.5,
    },
    viewRuneterra: {
        marginLeft: 20,
        width: windowWidth * 0.5,
    },
    viewTextQc: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    viewGame2: {
        width: windowWidth * 0.27,
        marginLeft: 10,
    },
    viewText2: {
        paddingTop: 10,
        marginLeft: 10
    }
    ,
    imageGame: {
        width: '100%',
        height: windowWidth * 0.3,
        borderRadius: 5,
        marginTop: 10,
        resizeMode: 'stretch'
    },
    imageGame2: {
        width: windowWidth * 0.24,
        height: windowWidth * 0.24,
        marginTop: 20,
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    imageGame3: {
        width: windowWidth * 0.24,
        height: windowWidth * 0.24,
        marginTop: 20,
        borderRadius: 10,
        resizeMode: 'stretch'
    }
    ,
    imageGame4: {
        width: windowWidth * 0.9,
        height: windowWidth * 0.5,
        marginTop: 20,
        borderRadius: 5,
        resizeMode: 'stretch',
        marginLeft: 10
    },
    imageGame5: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        marginTop: 20,
        borderRadius: 10,
        resizeMode: 'stretch',
        marginLeft: 10
    },
    viewImage3: {
        flexDirection: 'row'
    },
    viewTextGame: {
        marginLeft: 13,
        marginTop: 17
    }
})