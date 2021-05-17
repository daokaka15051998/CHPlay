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
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 270, marginTop: 2 }} />
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
                                    uri: 'data:image/jpeg;base64,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',
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