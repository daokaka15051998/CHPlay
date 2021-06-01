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

export default function Charts1() {
    return (

        <View style={styles.view1}>

            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
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
                                uri: 'https://cdn.tgdd.vn/2020/11/GameApp/unnamed(1)-180x180.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>VssID</Text>
                            <Text>Doanh nghiệp</Text>
                            <Text>43,6 * 17MB</Text>
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
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lo9gaWJnjcXJFL1Tng_yTpQUOI4j6UaqNeY3SX4XLBn-vhaQ-7AykXNwmTK8O28UpHw&usqp=CAU',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Bluezone-Phát hiện tiếp xúc</Text>
                            <Text>Sức khỏe và thể hình</Text>
                            <Text>4,7 * 34MB</Text>
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
                                uri: 'https://i.pinimg.com/474x/0d/71/23/0d7123aab181cbf5bec395c8c5be62bd.jpg',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text numberOfLines={1}>Zenly-Bản đồ của bạn và những người bạn</Text>
                            <Text>Xã hội</Text>
                            <Text>4,0 * 38MB</Text>
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
                                uri: 'https://cdn.tgdd.vn/GameApp/2/225686/Screentshots/capcut-chinh-sua-video-mien-phi-don-gian-chuyen-nghiep-225686-logo-08-07-2020.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>CapCut-chỉnh sửa video</Text>
                            <Text>Xem và sửa video</Text>
                            <Text>Cập nhập</Text>
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
                                uri: 'https://s16.tiktokcdn.com/musical/resource/mtact/static/images/share_img.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>TikTok</Text>
                            <Text>Xem và sửa video</Text>
                            <Text>Cập nhập</Text>
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
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQauVR1do94t4Y9-H5zqg5BCSVxUCaq1kBMamb3GfSvkUeF2TIZf6cRYWGLTeXR52y4Q&usqp=CAU',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Shopee: Mua Sắm Online #1</Text>
                            <Text>Mua sắm</Text>
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
                                uri: 'https://laz-img-cdn.alicdn.com/tfs/TB1PApewFT7gK0jSZFpXXaTkpXa-200-200.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Lazada Mua Gì Cũng Có</Text>
                            <Text>Mua sắm</Text>
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
                                uri: 'https://kinhdoanhzalo.net/wp-content/uploads/2020/01/unnamed.png',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Zalo-Gọi Video sắc nét</Text>
                            <Text>Liên lạc</Text>
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
                                uri: 'https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk',
                            }}
                            style={styles.imagegame}
                        />
                        <View style={styles.viewChu2}>
                            <Text>Messenger-nhắn tin và gọi video</Text>
                            <Text>Liên lạc</Text>
                            <Text>7,6 * 63MB</Text>
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
        width: windowWidth * 0.12,
        height: windowWidth * 0.12,
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 15
    }
})