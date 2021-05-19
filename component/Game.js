import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView } from 'react-native-tab-view';


export default function Game({ navigation }) {
    return (
        <View style={styles.viewTroChoi}>
            <ScrollView>
                <View style={styles.viewHeader}>
                    <Icon name="search" color="black" size={25} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                    <TextInput placeholder="Tìm kiếm ứng dụng và trò chơi" style={styles.input} />
                    <Icon name="microphone" color="black" size={25} style={{ marginTop: 10, marginRight: 0, marginBottom: 5 }} />
                    <Image source={require('./daonv1.png')}
                        style={{ width: 30, height: 30, marginTop: 7, marginLeft: 10 }}
                    />
                </View>
                <View style={styles.viewHeader2}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Cho bạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Bảng xếp hạng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Có tính phí</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Loại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Gia đình</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Lựa chọn của biên tập viên</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ backgroundColor: '#BDBDBD', height: 1, width: '100 %' }}></View>
                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Khám phá các trò chơi được đề xuất...</Text>
                    <Icon name="arrow-right" color="black" size={25} style={{ marginLeft: 10, marginTop: 2 }} />
                </View>

                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewBia}>
                            <Image
                                source={{
                                    uri: 'https://cdn.tgdd.vn/GameApp/3/221132/Screentshots/8-ball-pool-tro-choi-bida-dinh-cao-noi-the-hien-ky-nang-cua-ban-01-05-2021-0.png',
                                }}
                                style={{ width: 200, height: 120, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://cdn.tgdd.vn/GameApp/3/233131/Screentshots/mu-vuot-thoi-dai-funtap-233131-logo-30-12-2020.png',
                                }}
                                    style={{ width: 40, height: 40, marginTop: 20, borderRadius: 10 }}
                                />
                                <View style={styles.viewText}>
                                    <Text>8 Ball Pool</Text>
                                    <Text>Thể Thao . Bi-a</Text>
                                    <Text> 4.4 * 60 MB</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://gamek.mediacdn.vn/zoom/780_295/133514250583805952/2020/11/25/lor-banner-16062792690151811515922.jpg',
                                }}
                                style={{ width: 200, height: 120, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://i.ytimg.com/vi/rPrgrwNARvE/maxresdefault.jpg',
                                }}
                                    style={{ width: 40, height: 40, marginTop: 20, borderRadius: 10 }}
                                />
                                <View style={styles.viewText}>
                                    <Text>Huyền Thoại Runeterra</Text>
                                    <Text>Thẻ bài . None</Text>
                                    <Text> 4.3 * 67 MB</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://play-lh.googleusercontent.com/KOJrBveCPD9tAPwB8bc56E_DujYLulkr6uWV4FRR8khMheYclRb_JGuGAHSJE6rHzdo',
                                }}
                                style={{ width: 200, height: 120, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://play-lh.googleusercontent.com/KOJrBveCPD9tAPwB8bc56E_DujYLulkr6uWV4FRR8khMheYclRb_JGuGAHSJE6rHzdo',
                                }}
                                    style={{ width: 40, height: 40, marginTop: 20, borderRadius: 10 }}
                                />
                                <View style={styles.viewText}>
                                    <Text>Võ Lâm Truyền Kỳ 1</Text>
                                    <Text>Mobie</Text>
                                    <Text>0.95 GB</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                }}
                                style={{
                                    width: 200, height: 120, borderRadius: 5, marginTop: 10, shadowColor: "#000",
                                }}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                }}
                                    style={{ width: 40, height: 40, marginTop: 20, borderRadius: 10 }}
                                />
                                <View style={styles.viewText}>
                                    <Text>Thợ Săn Ma 3D</Text>
                                    <Text>Mobie</Text>
                                    <Text>0.95 GB</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446890/capsule_616x353.jpg?t=1618732004',
                                }}
                                style={{ width: 200, height: 120, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446890/capsule_616x353.jpg?t=1618732004',
                                }}
                                    style={{ width: 40, height: 40, marginTop: 20, borderRadius: 10 }}
                                />
                                <View style={styles.viewText}>
                                    <Text>ShaDow Fight</Text>
                                    <Text>Mobie</Text>
                                    <Text>0.95 GB</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                }}
                                style={{ width: 200, height: 120, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <Image source={{
                                    uri: 'https://res09.bignox.com/appcenter/vn/2020/10/5-27.jpg',
                                }}
                                    style={{ width: 40, height: 40, marginTop: 20, borderRadius: 10 }}
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
                    <ScrollView horizontal={true}>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://play-lh.googleusercontent.com/KOJrBveCPD9tAPwB8bc56E_DujYLulkr6uWV4FRR8khMheYclRb_JGuGAHSJE6rHzdo',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>Võ Lâm Truyền Kỳ 1 Mobie</Text>
                                <Text> 0.95 GB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://play.2game.vn/static/attachment/game/20210409/1617940996298609.jpg',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>Forsaken Word:Thần Ma Đao</Text>
                                <Text> 667MB</Text>
                            </View>
                        </View>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://upload.afkmobi.com/photos/afkmobi-com/2021/04/afkmobi_logo_tan_giang_ho_truyen_ky_mobile_ban_hd_chuan.png',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>Võ Lâm Truyền Kỳ 1 Mobie</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>


                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/233131/Screentshots/mu-vuot-thoi-dai-funtap-233131-logo-30-12-2020.png',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                    <ScrollView horizontal={true}>

                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/220297/Screentshots/candy-crush-soda-saga-tro-choi-keo-ngot-logo-19-05-2020.png',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
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
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại- Funtap</Text>
                                <Text> 98 MB</Text>
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

    viewHeader: {
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
    viewImage: {
        backgroundColor: 'white',
        height: 200,
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

    },
    viewRuneterra: {
        marginLeft: 10
    },
    viewTextQc: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
    },
    viewGame2: {
        width: 100,
        marginLeft: 10,
    },
    viewText2: {
        paddingTop: 10,
        marginLeft: 10
    }
})