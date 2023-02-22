import React from 'react';
import { moduleName } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from '../nestedScreens/HomeScreen';
import MapScreen from './../nestedScreens/MapScreen';
import CommentsScreen from './../nestedScreens/CommentsScreen';

const NestedScreen = createNativeStackNavigator();

export default function PostsScreen() {
	return (
		<NestedScreen.Navigator>
			<NestedScreen.Screen name="HomeScreen" component={HomeScreen} />
			<NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
			<NestedScreen.Screen name="MapScreen" component={MapScreen} />
		</NestedScreen.Navigator>
	);
}
