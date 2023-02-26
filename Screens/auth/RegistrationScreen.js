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
import { useDispatch } from 'react-redux';

import {authSingUpUser} from '../../redux/auth/authOperations'

const loadAplication = {};
const initialState = {
	nickname: '',
	email: '',
	password: '',
};

export default function RegisterScreen({navigation}) {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);

	const dispatch = useDispatch()

	const handleSubmit = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		console.log(state);
		
		dispatch(authSingUpUser(state))
		setState(initialState);
	};

	return (
		<TouchableWithoutFeedback onPress={handleSubmit}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require('../../assets/image/PhotoBG.jpg')}
				>
					<KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
						<View style={styles.form}>
							<Text style={styles.text}>Регистрация</Text>
							<View>
								<TextInput
									style={styles.input}
									onFocus={() => setIsShowKeyboard(true)}
									placeholder="Логин"
									value={state.nickname}
									onChangeText={value =>
										setState(prevState => ({ ...prevState, nickname: value }))
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
								<TouchableOpacity
									activeOpacity={0.5}
									style={styles.btn}
									onPress={handleSubmit}
								>
									<Text style={styles.btnTitle}>Зарегистрироваться</Text>
								</TouchableOpacity>
							<View style={{marginTop: 16, marginBottom: 45}}>
								<Text style={styles.textForm} onPress={() => navigation.navigate("Login")}>Уже есть аккаунт? Войти</Text>
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
	},
	text: {
		marginVertical: 32,
		textAlign: 'center',
		fontSize: 30,
	},
	input: {
		borderWidth: 1,
		borderColor: '#f6f6f6',
		height: 50,
		borderRadius: 8,
		color: '#000',
	},
	form: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingHorizontal: 16,
	},

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
		fontSize: 16,
		textAlign: 'center',
    color: '#1B4371',
	},
});
