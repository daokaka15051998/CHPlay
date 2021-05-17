import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Phim() {
    return (
        <View style={styles.viewPhim}>
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
                        <Text style={styles.textHeader}>Loại</Text>

                        <Text style={styles.textHeader}>Lựa chọn của biên tập viên</Text>
                        <Text style={styles.textHeader}>Gia đình</Text>
                    </ScrollView>
                </View>

                <View style={{ backgroundColor: '#BDBDBD', height: 1, width: '100 %' }}></View>

                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Phim Mới</Text>
                    <Icon name="arrow-right" color="black" size={25} style={{ marginLeft: 270, marginTop: 2 }} />
                </View>


                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'http://assets.nflxext.com/us/boxshots/hd1080/60022176.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Tom & Jerry</Text>
                                    <Text>4.1 * 270.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://m.media-amazon.com/images/M/MV5BNWQyMzA3NDItMDRhZi00MWUxLTgyYmYtM2I1NTI3ZTE2NjY5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Empty Man</Text>
                                    <Text>3.7 * 50.000đ </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://kenh14cdn.com/203336854389633024/2021/3/25/zack-3-16166616064151262235924.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Zack snyder's</Text>
                                    <Text>justice league</Text>
                                    <Text>4.7 * 50.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://vtv1.mediacdn.vn/thumb_w/640/2020/12/17/photo-3-16082086603191412342722.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Soul</Text>
                                    <Text>4.2 * 80.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://m.media-amazon.com/images/M/MV5BNWY2NWE0NWEtZGUwMC00NWMwLTkyNzUtNmIxMmIyYzA0MjNiXkEyXkFqcGdeQXVyMTA2OTQ3MTUy._V1_UY1200_CR90,0,630,1200_AL_.jpg?w=144',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Wonder Woman</Text>
                                    <Text>1984</Text>
                                    <Text>4.7 * 50.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://m.media-amazon.com/images/M/MV5BNGU1NGNiYzYtMTQ2Ni00M2ZlLTg0N2QtMDFhMzNjNzcyMGYyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Croodes: A New</Text>
                                    <Text>Age</Text>
                                    <Text>4.5 * 110.000đ</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Đề xuất cho bạn</Text>
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 220, marginTop: 2 }} />
                </View>


                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://lh3.googleusercontent.com/proxy/KyrqmO__RHjWuuDBDMG4yLIjBlxeT_-B_KLYSKTrOcG_nGN5FYmYauxQ5IdrUwri99CWK70vySiz9UU2T01d2FXXCAGmzfkR1q_DkyM3Hw5Scm2IynwQCWIH3VdZD38dHzmQDXKC2eRK4Mf8vByNPVaQH6PQayecKRfiACkfJ6NWKIB9rVyCSMvBC0Gs59rDOg_d9lg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>No Strings</Text>
                                    <Text> Attached</Text>
                                    <Text>3.7 * 60.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://danhweb2.files.wordpress.com/2018/11/mv5bogq5ytm3yzctotvmmc00ogiylwfkztytmwywowzhmja2mwmwxkeyxkfqcgdeqxvymjuymte5ma-_v1_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Spider-Man:</Text>
                                    <Text>Homecoming</Text>
                                    <Text>4.4* 60.000đ </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.pinimg.com/1200x/32/1c/0a/321c0a641597b427e338d137fe093957.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Lego Movie</Text>
                                    <Text>4.2 * 200.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://images-na.ssl-images-amazon.com/images/I/81GRZpBvlJL._SL1500_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Walking with</Text>
                                    <Text>Dinosaurs the movie</Text>
                                    <Text>4.2 * 80.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2019/12/16/772541/Frozen_Two_Ver8.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Frozen II</Text>
                                    <Text>4.2 * 19  0.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://play-lh.googleusercontent.com/3mT5qeUxDc4LmNE6cg3CdyQUpqOlOSZe-_MTMv9dXmYhAX7doGTW6b4_t3FYCGcPMt4',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Boss Baby</Text>
                                    <Text>4.4 * 80.000đ</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Đề xuất cho bạn</Text>
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 220, marginTop: 2 }} />
                </View>

                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://images2.vudu.com/poster2/10617-338',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Harry Potter and</Text>
                                    <Text> the sorcerer's St</Text>
                                    <Text>4.6 * 40.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'http://i.imgur.com/DAnovcL.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>A Good Day to Die</Text>
                                    <Text>Hard</Text>
                                    <Text>4.1* 40.000đ </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.pinimg.com/1200x/32/1c/0a/321c0a641597b427e338d137fe093957.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Lego Movie</Text>
                                    <Text>4.2 * 200.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://images-na.ssl-images-amazon.com/images/I/81GRZpBvlJL._SL1500_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Walking with</Text>
                                    <Text>Dinosaurs the movie</Text>
                                    <Text>4.2 * 80.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2019/12/16/772541/Frozen_Two_Ver8.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Frozen II</Text>
                                    <Text>4.2 * 19  0.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://play-lh.googleusercontent.com/3mT5qeUxDc4LmNE6cg3CdyQUpqOlOSZe-_MTMv9dXmYhAX7doGTW6b4_t3FYCGcPMt4',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Boss Baby</Text>
                                    <Text>4.4 * 80.000đ</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    viewPhim: {
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
    viewDX: {
        flexDirection: 'row',
        marginTop: 10
    },

    textDX: {
        fontSize: 20,
        marginLeft: 10
    },
    viewTom: {
        marginLeft: 10,
        marginTop: 15,
        alignItems: 'center'
    },
    viewImage2: {
        marginLeft: 10,
        alignItems: 'center'
    },
    viewText: {
        marginTop: 10
    }
})