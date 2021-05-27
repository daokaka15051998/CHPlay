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

export default function Charts(navigation) {
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
                                uri: 'https://play-lh.googleusercontent.com/TgGhKHzYTMoeoI4E4hby6CB8t_SNT0JYSxBKvccfdxVwFZbI8VDBbrl2SHgNaSH5hTnw',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>CatWalk Beauty</Text>
                            <Text>Thông thường</Text>
                            <Text>4,6 * 75MB</Text>
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
                                uri: 'https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/2c/0c/5c/2c0c5cb7-e988-2c66-9849-2f568611ae4a/source/200x200bb.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Makeover Run</Text>
                            <Text>Đua xe</Text>
                            <Text>3,7 * 69MB</Text>
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
                                uri: 'https://www.gamehayapk.com/wp-content/uploads/2021/03/bridge-race.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Bridge Race</Text>
                            <Text>Thông thường</Text>
                            <Text>3,6 * 91MB</Text>
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
                                uri: 'https://imag.malavida.com/mvimgbig/download-fs/paper-fold-31689-0.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Paper Fold</Text>
                            <Text>Thông thường</Text>
                            <Text>4,6 * 75MB</Text>
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
                                uri: 'https://apkshelf.com/wp-content/uploads/2021/04/Hair-Challenge-Apk-1200x1200.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Hair Challenge</Text>
                            <Text>Hành động</Text>
                            <Text>3,6 * 75MB</Text>
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
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlw39fP-VHNLEdNPkvtKb8n_Q_udMBTa4wjg2Obt3-xTS_sGPlzEsVfw52nZblLH5ZK0&usqp=CAU',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>8 Ball Pool</Text>
                            <Text>Thể Thao . Bi-a . Không cần Internet</Text>
                            <Text>4,4 * 60MB</Text>
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
                                uri: 'https://play-lh.googleusercontent.com/MHNwWG2hfjPiBCvII--geihlEMD_dzUyAld-Z1r4NRj0BnyHFuBEV_V0DtAiBU4j77Y',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Muscle Rush - Smash Running Game</Text>
                            <Text>Thông thường</Text>
                            <Text>4,1 * 60MB</Text>
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
                                uri: 'https://res09.bignox.com/appcenter/vn/gp-game-image/af8a35106e84ab0e00739004ae54a306',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Delete Puzzle: Erase One Part</Text>
                            <Text>Thông thường</Text>
                            <Text>4,6 * 75MB</Text>
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
                                uri: 'https://apkplz.net/storage/images/com/drawlifestories/drawingpuzzle/drawinggame/com.drawlifestories.drawingpuzzle.drawinggame_1.png ',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Draw It Story - Dra Life Story</Text>
                            <Text>Câu đố</Text>
                            <Text>4,1 * 63MB</Text>
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
        marginTop: 12
    },
    viewChu2: {
        marginLeft: 15,
        marginTop: 9
    },
    imagegame: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 15
    }
})