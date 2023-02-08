import { StatusBar } from 'expo-status-bar';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require('./assets/image/PhotoBG.jpg')}
			>
				<Text>Регистрация</Text>
				<TextInput style={styles.input} />
			</ImageBackground>
			<StatusBar style="auto" />
		</View>
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
		justifyContent: 'center',
		// alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#f6f6f6',
		marginHorizontal: 16,
		height: 50,
		borderRadius: 8,
		color: '#212121',
	},
});
