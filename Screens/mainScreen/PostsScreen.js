import React from 'react';
import { moduleName } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from '../HomeScreen';
import MapScreen from './../nestedScreens/MapScreen';
import CommentsScreen from './../nestedScreens/CommentsScreen';
import { Text, View, StyleSheet } from 'react-native';


const NestedScreen = createNativeStackNavigator();

export default function PostsScreen() {
	return (
		<View style={styles.container}>
			<Text>aaaaaaa</Text>
		</View>
		// <NestedScreen.Navigator>
		// 	<NestedScreen.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
		// 	<NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} options={{ headerShown: false }}/>
		// 	<NestedScreen.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
		// </NestedScreen.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});