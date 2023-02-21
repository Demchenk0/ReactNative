import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// * Page render
import LoginScreen from './Screens/auth/LoginScreen';
import RegisterScreen from './Screens/auth/RegistrationScreen';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';
import CreateScreen from './Screens/mainScreen/CreateScreen';
// todo Icons
import { Feather, AntDesign } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
	if (!isAuth) {
		return (
			<AuthStack.Navigator>
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
			</AuthStack.Navigator>
		);
	}
	return (
		<MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
			<MainTab.Screen
				options={{ title: "Публикации",
					tabBarIcon: ({ focused, color, size }) => (
						<Feather name="grid" size={size} color={color} />
					),
				}}
				name="Posts"
				component={PostsScreen}
			/>
			<MainTab.Screen
				options={{ title: "Создать публикацию", tabBarIcon: ({ focused, color, size }) => (
						<AntDesign name="plus" size={size} color={color} />
					), }}
				name="Create"
				component={CreateScreen}
			/>
			<MainTab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign name="user" size={size} color={color} />
					),
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</MainTab.Navigator>
	);
}
