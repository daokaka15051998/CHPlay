import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Sach() {
    return (
        <View style={styles.viewSach}>
            <ScrollView>
                <View style={styles.viewHeader}>
                    <Icon name="search" color="black" size={25} style={{ marginTop: 9, marginLeft: 10, marginBottom: 5 }} />
                    <TextInput placeholder="Tìm kiếm sách" style={styles.input} />
                    <Icon name="microphone" color="black" size={25} style={{ marginTop: 10, marginRight: 0, marginBottom: 5 }} />
                    <Image source={require('./daonv1.png')}
                        style={{ width: 30, height: 30, marginTop: 7, marginLeft: 10 }}
                    />
                </View>

                <View style={styles.viewHeader2}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Sách điện tử</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Sách nói</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Thể Loại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Bán chạy nhất</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Mới phát hành</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textHeader}>Miễn phổ biến</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={{ backgroundColor: '#BDBDBD', height: 1, width: '100 %' }}></View>

                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Truyện tranh bán chạy nhất</Text>
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 130, marginTop: 2 }} />
                </View>


                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593740579l/54368780._SX318_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Người vợ theo hợp đông.Người tình t..</Text>
                                    <Text>3.9 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://japamanga.com/vn/wp-content/uploads/2015/08/maid-eye4.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Vì tôi là người giúp việc 2: bí ẩn của ng...</Text>
                                    <Text>4.2* 5.000đ </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://www.romancecomics.com/img/book/comic/hqlc003314_l01.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Tình Yêu Gian Trá</Text>
                                    <Text>4.3 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://m.media-amazon.com/images/I/51dst9DvLpL.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Bê Bối Hôn Nhân Showbiz Mà Cưng</Text>
                                    <Text>4.2 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498881457l/35560742._SX318_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Người Vợ Xuyên Không </Text>
                                    <Text>4.2 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581701532l/51260206._SX318_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Người Tình Bất Ngờ</Text>
                                    <Text>4.2 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Những cuốn sách ly kì và rùng rợn</Text>
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 50, marginTop: 2 }} />
                </View>


                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://images-na.ssl-images-amazon.com/images/I/31c-2D8nZHL._SX331_BO1,204,203,200_.jpg',
                                }}
                                style={{ width: 90, height: 140, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Black Cat</Text>
                                    <Text>4.0 * 818đ</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/dfa387193_174411.jpg',
                                }}
                                style={{ width: 90, height: 140, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Complete Sherlock Holm</Text>
                                    <Text>4.0* 4.387đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476797502/the-memoirs-of-sherlock-holmes-9781476797502_hr.jpg',
                                }}
                                style={{ width: 90, height: 140, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>The Memoirs of Sherlock Holm</Text>
                                    <Text>4.2 * Miễn Phí</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://books.google.com/books/content?id=22BvwCWgViYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70Tsx8poYXcGDO8D1FLzWO_QtaBWhRysKzqNTglGIHjjf0BSA-ABX0n-A2eS13IdNyCsvmPq4Y-C4Z5V4oWdQZwwNGAFOI1t7bhlmoOegKF4CLEfA2MkGjee6J7XD7hABpPoxej',
                                }}
                                style={{ width: 90, height: 140, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Conan: Membongkar Ke...</Text>
                                    <Text>4.3 * 25.478đ</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://images-na.ssl-images-amazon.com/images/I/81MCKrZ0qoL.jpg',
                                }}
                                style={{ width: 90, height: 140, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>My Story</Text>
                                    <Text>197.605đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593740579l/54368780._SX318_.jpg',
                                }}
                                style={{ width: 90, height: 140, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Người vợ theo hợp đồng .Người tình t...</Text>
                                    <Text></Text>
                                    <Text>3.9 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.viewDX}>
                    <Text style={styles.textDX}>Sách bán chạy nhất</Text>
                    <Icon name="angle-right" color="black" size={25} style={{ marginLeft: 130, marginTop: 2 }} />
                </View>


                <View style={styles.viewImage}>
                    <ScrollView horizontal={true}>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://taisachmoi.com/wp-content/uploads/2018/12/dac-nhan-tam.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Đắc Nhân Tâm</Text>
                                    <Text>4.2 * 57.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://japamanga.com/vn/wp-content/uploads/2015/08/maid-eye4.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Vì tôi là người giúp việc 2: bí ẩn của ng...</Text>
                                    <Text>4.2* 5.000đ </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://www.romancecomics.com/img/book/comic/hqlc003314_l01.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Tình Yêu Gian Trá</Text>
                                    <Text>4.3 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://m.media-amazon.com/images/I/51dst9DvLpL.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Bê Bối Hôn Nhân Showbiz Mà Cưng</Text>
                                    <Text>4.2 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498881457l/35560742._SX318_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Người Vợ Xuyên Không </Text>
                                    <Text>4.2 * 22.000đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTom}>
                            <Image
                                source={{
                                    uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581701532l/51260206._SX318_.jpg',
                                }}
                                style={{ width: 100, height: 150, borderRadius: 5, marginTop: 10 }}
                            />
                            <View style={styles.viewImage2} >
                                <View style={styles.viewText}>
                                    <Text>Người Tình Bất Ngờ</Text>
                                    <Text>4.2 * 22.000đ</Text>
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
    viewSach: {
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
    viewTom: {
        width: 110,
        marginLeft: 10,
        marginTop: 15,
        alignItems: 'center'
    },
    viewImage2: {
        marginLeft: 3,
        alignItems: 'center'
    },
    viewText: {
        marginTop: 10,
    }
})