import React, { PureComponent } from 'react'; import { Button, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import icon from '../icon';
import { icons } from 'antd/lib/image/PreviewGroup';


export default class Camera extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
        };
    }
    takePicture = async () => {
        if (this.camera && !this.state.takingPic) {

            let options = {
                quality: 0.85,
                fixOrientation: true,
                forceUpOrientation: true,
            };

            this.setState({ takingPic: true });

            try {
                const data = await this.camera.takePictureAsync(options);
                Alert.alert('Success', JSON.stringify(data));
            } catch (err) {
                Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
                return;
            } finally {
                this.setState({ takingPic: false });
            }
        }
    };

    render() {
        return (

            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                captureAudio={false}
                style={{ flex: 1 }}
                type={RNCamera.Constants.Type.back}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                activeOpacity={0.5}
                style={styles.btnAlignment}
                onPress={this.takePicture}>
                <Icon name="camera" color="#6E6E6E" size={50} />
            </RNCamera>

            // onPress={() => navigation.navigate('Camera')}

        );
    }
}

const styles = StyleSheet.create({
    btnAlignment: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
});

