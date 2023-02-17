import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Platform,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';

const loadAplication = {};
const initialState = {
	login: '',
	email: '',
	password: '',
};

export default function Registration() {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);

	const keyboardHide = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		console.log(state);
		setState(initialState);
	};

	return (
		<TouchableWithoutFeedback onPress={keyboardHide}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require('.././image/PhotoBG.jpg')}
				>
					<KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
						<View style={styles.form}>
							<Text style={styles.registration}>Регистрация</Text>
							<View>
								<TextInput
									style={styles.input}
									onFocus={() => setIsShowKeyboard(true)}
									placeholder="Логин"
									value={state.login}
									onChangeText={value =>
										setState(prevState => ({ ...prevState, login: value }))
									}
								/>
							</View>
							<View style={{ marginTop: 16 }}>
								<TextInput
									style={styles.input}
									onFocus={() => setIsShowKeyboard(true)}
									placeholder="Адрес электронной почты"
									value={state.email}
									onChangeText={value =>
										setState(prevState => ({ ...prevState, email: value }))
									}
								/>
							</View>
							<View style={{ marginTop: 16 }}>
								{/* <Text style={styles.inputText}> Password</Text> */}
								<TextInput
									style={styles.input}
									onFocus={() => setIsShowKeyboard(true)}
									placeholder="Пароль"
									secureTextEntry={true}
									value={state.password}
									onChangeText={value =>
										setState(prevState => ({ ...prevState, password: value }))
									}
								/>
							</View>

							{/* <Button title="Зарегистрироваться" /> */}
							<View>
								<TouchableOpacity
									activeOpacity={0.5}
									style={styles.btn}
									onPress={keyboardHide}
								>
									<Text style={styles.btnTitle}>Зарегистрироваться</Text>
								</TouchableOpacity>
								<Text style={styles.textForm}>Уже есть аккаунт? Войти</Text>
							</View>
						</View>
					</KeyboardAvoidingView>
				</ImageBackground>
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end',
		// alignItems: 'center',
		// width: 375,
		// height: 812,
	},
	registration: {
		marginVertical: 32,
		textAlign: 'center',
		fontSize: 30,
	},
	input: {
		borderWidth: 1,
		borderColor: '#f6f6f6',
		height: 50,
		borderRadius: 8,
		color: '#fff',
	},
	form: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingHorizontal: 16,
	},

	// inputText: {
	// 	color: '#FFF',
	// },
	btn: {
		backgroundColor: '#FF6C00',
		height: 51,
		borderRadius: 100,
		marginTop: 43,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnTitle: {
		fontSize: 16,
		color: '#fff',
	},
	textForm: {
		marginTop: 16,
		textAlign: 'center',
		marginBottom: 45,
	},
});
