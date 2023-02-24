import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './mainScreen/PostsScreen';
import ProfileScreen from './mainScreen/ProfileScreen';
import CreateScreen from './mainScreen/CreateScreen';
// todo Icons
import { Feather, AntDesign } from '@expo/vector-icons';
const MainTab = createBottomTabNavigator();

export default function HomeScreen() {
	return (
		<MainTab.Navigator
			screenOptions={{ tabBarShowLabel: false }}
			initialRouteName="Posts"
		>
			<MainTab.Screen
				options={{
					title: 'Публикации',
					headerRight: () => (
						<View style={{ marginRight: 20 }}>
							<Feather
								name="log-out"
								size={24}
								color="black"
								// onPress={logOut}
							/>
						</View>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<Feather name="grid" size={size} color={color} />
					),
				}}
				name="Posts"
				component={PostsScreen}
			/>
			<MainTab.Screen
				options={{
					title: 'Создать публикацию',
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign name="plus" size={size} color={color} />
					),
				}}
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
