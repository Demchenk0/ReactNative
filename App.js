import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './Screens/auth/LoginScreen';
import RegisterScreen from './Screens/auth/RegistrationScreen';

const AuthStack = createNativeStackNavigator();

export default function App() {
	// const [fontsLoaded] = useFonts({
	//   Roboto_400Regular,
	//   Roboto_500Medium,
	//   Roboto_900Black,
	// });
	// useEffect(() => {
	//   if (fontsLoaded) {
	//     SplashScreen.hideAsync();
	//   }
	// }, [fontsLoaded]);

	// if (!fontsLoaded) {
	//   return null;
	// }
	return (
		<NavigationContainer>
			<AuthStack.Navigator>
				<AuthStack.Screen name="Login" component={LoginScreen} />
				<AuthStack.Screen name="Registration" component={RegisterScreen} />
			</AuthStack.Navigator>
		</NavigationContainer>
	);
}
