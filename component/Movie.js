import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Movie() {
    return (
        <View style={styles.viewPhim}>
            <ScrollView>
                <View style={styles.viewHeader}>
                    <Icon name="search" color="black" size={25} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                    <TextInput placeholder="Tìm kiếm phim" style={styles.input} />
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
                            <Text style={styles.textHeader}>Loại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Lựa chọn của biên tập viên</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Gia đình</Text>
                        </TouchableOpacity>
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
                                    uri: 'data:image/jpeg;base64,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',
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
        width: '70%',
        height: '100%',
        marginLeft: 10,
        borderRadius: 5,
        marginRight: 5,
        fontSize: 15,
        alignItems: 'center'
        // placeholder="Tìm kiếm ứng dụng và trò chơi",
    },
    viewDX: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
    },

    textDX: {
        fontSize: 20,
        marginLeft: 10
    },
    viewTom: {
        width: 110,
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