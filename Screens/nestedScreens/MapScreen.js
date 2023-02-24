import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function MapScreen() {
	return (
		<View style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 50.53223034979125, 
					longitude: 30.608198424206837,
					latitudeDelta: 0.001,
					longitudeDelta: 0.006,
				}}
				
			>
				<Marker coordinate={{latitude: 50.53223034979125, 
					longitude: 30.608198424206837}} title="Magazine" />
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
