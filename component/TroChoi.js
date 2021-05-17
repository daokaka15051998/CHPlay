import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import UngDung from './UngDung';
import Phim from './Phim';
import Sach from './Sach';


export default function TroChoi({ navigation }) {
    return (
        <View style={styles.viewTroChoi}>
            <ScrollView>
                <View style={styles.viewHeader}>
                    <Icon name="search" color="black" size={25} style={{ marginTop: 6, marginLeft: 10, marginBottom: 5 }} />
                    <TextInput style={styles.input} />
                    <Icon name="microphone" color="black" size={25} style={{ marginTop: 6, marginRight: 0, marginBottom: 5 }} />
                    <Image source={require('./daonv1.png')}
                        style={{ width: 30, height: 30, marginTop: 5, marginLeft: 10 }}
                    />
                </View>
                <View style={styles.viewHeader2}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity

                        >
                            <Text style={styles.textHeader}>Cho bạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                        >
                            <Text style={styles.textHeader}>Bảng xếp hạng</Text>
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Có tính phí</Text>
                        <Text style={styles.textHeader}>Loại</Text>
                        <Text style={styles.textHeader}>Gia đình</Text>
                        <Text style={styles.textHeader}>Lựa chọn của biên tập viên</Text>
                    </ScrollView>
                </View>
                <View style={{ backgroundColor: '#BDBDBD', height: 1, width: '100 %' }}></View>
                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Khám phá các trò chơi được đề xuất...</Text>
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 10, marginTop: 2 }} />
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
                                    uri: 'data:image/jpeg;base64,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',
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
                                <Text>Võ Lâm Truyền Kỳ 1</Text>
                                <Text>Mobie</Text>
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
                                <Text>Forsaken</Text>
                                <Text>Word:Thần Ma Đao</Text>
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
                                <Text>Võ Lâm Truyền Kỳ 1</Text>
                                <Text>Mobie</Text>
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
                                <Text>Luyện Yêu Ký</Text>
                                <Text>Games</Text>
                                <Text> 311MB</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <Text style={{ marginTop: 20 }}>Khám phá các trò chơi được đề xuất </Text>

                <View style={styles.viewGame}>
                    <ScrollView horizontal={true}>
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'https://cdn.tgdd.vn/GameApp/3/220297/Screentshots/candy-crush-soda-saga-tro-choi-keo-ngot-logo-19-05-2020.png',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>Candy Crush Soda</Text>
                                <Text>Saga</Text>
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
                                <Text>Summpners War</Text>
                                <Text>Lost Centuria</Text>
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
                                <Text>Võ Lâm Truyền Kỳ 1</Text>
                                <Text>Mobie</Text>
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
                                <Text>Luyện Yêu Ký</Text>
                                <Text>Games</Text>
                                <Text> 311MB</Text>
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
        height: 40,
        borderRadius: 5,
        width: '95%',
        marginLeft: 10,
        borderWidth: 0.3,
        marginTop: 5
    },
    input: {
        borderColor: 'black',
        borderWidth: 0.05,
        width: '70%',
        height: '100%',
        marginLeft: 10,
        borderRadius: 5,
        marginRight: 5,
        // placeholder="Tìm kiếm ứng dụng và trò chơi",
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
    },
    viewImage2: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    viewText: {
        marginLeft: 5,
        paddingTop: 10,
    },
    viewBia: {
        marginLeft: 10,
    },
    viewRuneterra: {
        marginLeft: 10
    },
    viewTextQc: {
        flexDirection: 'row',
        marginTop: 20,
    },
    viewGame2: {
        marginLeft: 10
    }
})