import React, { useState, useEffect } from 'react';
import {View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather  } from '@expo/vector-icons';

export default function DefaultScreenPosts({ route, navigation }) {
	const [posts, setPosts] = useState([]);
	console.log('route.params', route.params);

	useEffect(() => {
		if (route.params) {
			setPosts(prevState => [...prevState, route.params]);
		}
	}, [route.params]);
	console.log('posts', posts);

	return (
		<View style={styles.container} >
			<FlatList
				data={posts}
				keyExtractor={(item, indx) => indx.toString()}
				renderItem={({ item }) => (
					<View style={{marginBottom: 10, justifyContent:'center', alignItems: 'center'}}>
						<Image source={{uri: item.photo}} style={{ width: 300, height: 200}} />
					</View>
				)}
			/>
            <TouchableOpacity onPress={() => navigation.navigate('Comments')} >
					<View style={styles.iconsContainer}>
                    <FontAwesome name="comments-o" size={24} color="black" />
					</View>
				</TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Map')} >
					<View style={styles.iconsContainer}>
                    <Feather name="map" size={24} color="black" />
					</View>
				</TouchableOpacity>

               

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        marginHorizontal: 16,
	},
    iconsContainer:{
        justifyContent: "space-between",
    }
});
