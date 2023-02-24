import React, { useState } from 'react';
import {
	Text,
	Image,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location';

export default function CreateScreen({ navigation }) {
	// const [location, setLocation] = useState(null);
	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState('');

	const takePhoto = async () => {
		const photo = await camera.takePictureAsync();
		// const location = await Location.getCurrentPositionAsync({});
		// console.log('latitude', location.coords.latitude);
		// console.log('longitude', location.coords.longitude);
		setPhoto(photo.uri);
		console.log('photo', photo);
	};

	const sendPhoto = () => {
		console.log('navigation', navigation);
		navigation.navigate('DefaultScreen', { photo });
	};
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const keyboardHide = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={keyboardHide}>
			<View style={styles.container}>
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
					<Camera style={styles.camera} ref={setCamera}>
						{photo && (
							<View style={styles.photoContainer}>
								<Image
									source={{ uri: photo }}
									style={{ height: 111, width: 111 }}
								/>
							</View>
						)}
						<TouchableOpacity onPress={takePhoto}>
							<View style={styles.flip}>
								<Entypo name="camera" size={24} color="#BDBDBD" />
							</View>
						</TouchableOpacity>
					</Camera>

					<View>
						<TextInput
							style={styles.input}
							onFocus={() => setIsShowKeyboard(true)}
							placeholder="Название..."
						/>
					</View>
					<View style={{ marginTop: 16 }}>
						
						<TextInput
							style={styles.input}
							onFocus={() => setIsShowKeyboard(true)}
							placeholder="Местность..."
							secureTextEntry={true}
						/>
					</View>

					<TouchableOpacity style={styles.btnSend} onPress={sendPhoto}>
						<Text style={styles.btnTitle}>Опубликовать</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
	camera: {
		borderColor: 'red',
		borderRadius: 10,
		borderWidth: 1,
		height: 240,
		marginTop: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
	flip: {
		borderWidth: 1,
		borderRadius: 50,
		color: '#fff',
		height: 60,
		width: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	photoContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 10,
		marginTop: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#f6f6f6',
		height: 50,
		borderRadius: 8,
		color: '#fff',
	},
	btnSend: {
		backgroundColor: '#FF6C00',
		height: 51,
		borderRadius: 100,
		marginTop: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnTitle: {
		fontSize: 16,
		color: '#fff',
	},
});
