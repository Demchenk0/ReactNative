import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

export default function PostsScreen({ route }) {
	const [posts, setPosts] = useState([]);
	console.log('route.params', route.params);

	useEffect(() => {
		if (route.params) {
			setPosts(prevState => [...prevState, route.params]);
		}
	}, [route.params]);
	console.log('posts', posts);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				keyExtractor={(item, indx) => indx.toString()}
				renderItem={({ item }) => (
					<View style={{marginBottom: 10, justifyContent:'center', alignItems: 'center'}}>
						<Image source={{uri: item.photo}} style={{ width: 300, height: 200}} />
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
	},
});
