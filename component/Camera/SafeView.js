// App.js

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

var ImagePicker = require('react-native-image-picker');
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// import ImagePicker from 'react-native-image-picker';

export default class SafeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resourcePath: {},
        };
    }

    // Launch Camera
    cameraLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchCamera(options, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                const source = { uri: res.uri };
                console.log('response', JSON.stringify(res));
                this.setState({
                    filePath: res,
                    fileData: res.data,
                    fileUri: res.uri
                });
            }
        });
    }

    imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                const source = { uri: res.uri };
                this.setState({
                    filePath: res,
                    fileData: res.data,
                    fileUri: res.uri
                });
            }
        });
    }

    render() {

        return (
            <View style={styles.container} >
                <View style={styles.container}>
                    <Image
                        source={{ uri: this.state.resourcePath.uri }}
                        style={{ width: 200, height: 200 }}
                    />
                    <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}  >
                        <Text style={styles.buttonText}>Mở máy ảnh</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.imageGalleryLaunch} style={styles.button}  >
                        <Text style={styles.buttonText}>Mở thư viện ảnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    button: {
        width: 250,
        height: 60,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 12
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
    }
});