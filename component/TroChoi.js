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
                    <TextInput placeholder="Tìm kiếm ứng dụng và trò chơi" style={styles.input} />
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
                        <View style={styles.viewRuneterra}>
                            <Image
                                source={{
                                    uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446890/capsule_616x353.jpg?t=1618732004',
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
                                uri: 'data:image/jpeg;base64,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',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại-</Text>
                                <Text>Funtap</Text>
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
                        <View style={styles.viewGame2}>
                            <Image source={{
                                uri: 'data:image/jpeg;base64,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',
                            }}
                                style={{ width: 90, height: 90, marginTop: 20, borderRadius: 10 }}
                            />
                            <View style={styles.viewText}>
                                <Text>MU:Vượt Thời Đại-</Text>
                                <Text>Funtap</Text>
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
        height: 40,
        borderRadius: 5,
        width: '95%',
        marginLeft: 10,
        borderWidth: 0.3,
        marginTop: 5
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