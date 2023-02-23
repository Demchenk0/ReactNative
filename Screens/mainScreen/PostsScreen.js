import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';


const NestedScreen = createNativeStackNavigator();

export default function PostsScreen() {
	return (
		<View style={styles.container}>
			<Text>PostsScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});