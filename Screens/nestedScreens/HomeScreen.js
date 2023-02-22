import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
		 <Ionicons name="md-checkmark-circle" size={32} color="green" />
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
