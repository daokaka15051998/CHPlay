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


import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Charts2(navigation) {
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
                        <Image
                            source={{
                                uri: 'https://1.bp.blogspot.com/-G2UIFPjBvu0/YE3tl_S9qZI/AAAAAAAAY2o/uFUye-2-LdYKle0H6HgJ9bm8cou-x3RpwCLcBGAsYHQ/w640-h636/zack%2Bsnyder%2Bjustice%2Bleague.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>zac snyder justice league</Text>
                            <Text>Âm thanh nhiều thứ tiếng</Text>
                            <Text>43,6 *</Text>
                            <Text>50.000 đ</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>2</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://gamek.mediacdn.vn/133514250583805952/2021/1/15/1-16106966278281009206635.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Tom & Jery</Text>
                            <Text>Âm thanh nhiều thứ tiếng</Text>
                            <Text>4,1 *</Text>
                            <Text>50.000 đ</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>3</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text numberOfLines={1}>a quiet place</Text>
                            <Text>Âm thanh tiếng Anh</Text>
                            <Text>4,2</Text>
                            <Text>60.000 đ</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>4</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/w/o/wonder_woman_1984-_vietnamese_poster_1_.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>wonder woman 1984</Text>
                            <Text>Âm thanh nhiều thứ tiếng</Text>
                            <Text>4.5 *</Text>
                            <Text>50.000 đ</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>5</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://static.epub.vn/epubvn-image/original-cover1564893589541-268x0w.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Hary potter and the sorcers</Text>
                            <Text>Âm thanh tiếng Tiếng Anh</Text>
                            <Text>4,6 *</Text>
                            <Text>50.000 đ</Text>
                        </View>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>6</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://vcdn-giaitri.vnecdn.net/2021/04/22/bo-gia-quoc-te-jpeg-3870-1619080221.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Bố già</Text>
                            <Text>Tình cảm</Text>
                            <Text>4,4 * 60MB</Text>
                            <Text>200.000 đ</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>7</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Raya and the last dragon</Text>
                            <Text>Hoạnh Hình</Text>
                            <Text>3,9 *</Text>
                            <Text>210.000 đ</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>8</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/w/o/wonder_woman_1984-_vietnamese_poster_1_.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>wonder woman 1984</Text>
                            <Text>Liên lạc</Text>
                            <Text>4,5 75MB</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={styles.view2}>

                        <View style={styles.viewChu}>
                            <Text style={{ marginLeft: 15 }}>9</Text>
                            <AntDesign name="linechart" color="#6E6E6E" size={20} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                        </View>

                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxG-Z8YwWSXyF1LDa3auEgU23cfgXrJTUoKLbWIS1TLdl9Z1TyA3jCJ4rXo5AvOfwWq3Y&usqp=CAU',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Tenet</Text>
                            <Text>Âm thanh nhiều thứ tiếng</Text>
                            <Text>7,6 *</Text>
                            <Text>50.000 đ</Text>
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
        marginTop: 9
    },
    imagegame: {
        width: windowWidth * 0.17,
        height: windowWidth * 0.25,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 15
    }
})