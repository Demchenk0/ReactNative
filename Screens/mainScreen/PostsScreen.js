import { React } from 'react';
import { moduleName } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreenPosts from '../nestedScreens/DefaultScreenPosts';
import CommentsScreen from './../nestedScreens/CommentsScreen';
import MapScreen from '../nestedScreens/MapScreen';

const NestedScreen = createNativeStackNavigator();

export default function PostsScreen() {
	return (
		<NestedScreen.Navigator>
			<NestedScreen.Screen
			options={{ headerShown: false }}
				name="DefaultScreen"
				component={DefaultScreenPosts}
			/><NestedScreen.Screen
				name="Comments"
				component={CommentsScreen}
			/><NestedScreen.Screen
				name="Map"
				component={MapScreen}
			/>
		</NestedScreen.Navigator>
	);
}
