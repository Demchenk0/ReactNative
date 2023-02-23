import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// * Page render
import LoginScreen from './Screens/auth/LoginScreen';
import RegisterScreen from './Screens/auth/RegistrationScreen';
import HomeScreen from './Screens/HomeScreen';

const AuthStack = createNativeStackNavigator();

export default function useRoute(isAuth) {
		return (
			<AuthStack.Navigator>
				{!isAuth ? (
					<>
						<AuthStack.Screen
							options={{ headerShown: false }}
							name="Login"
							component={LoginScreen}
						/>
						<AuthStack.Screen
							options={{ headerShown: false }}
							name="Registration"
							component={RegisterScreen}
						/>
					</>
				) : (
					<AuthStack.Screen
						options={{ headerShown: false }}
						name="Home"
						component={HomeScreen}
					/>
				)}
			</AuthStack.Navigator>
		);
}
