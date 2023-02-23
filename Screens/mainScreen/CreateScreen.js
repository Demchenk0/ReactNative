import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Camera } from "expo-camera"
import { Entypo } from '@expo/vector-icons';


export default function CreateScreen() {
  const [camera, setCamera] = useState(null)


  const takePhoto = async () => {
    console.log('Camera ---->', camera.takePictureAsync());  
  }
	return (
		<View style={styles.container}>
			<Camera style={styles.camera} ref={setCamera}>
          <TouchableOpacity onPress={takePhoto}>
            {/* <Text style={styles.text}>Flip Camera</Text> */}
            <View style={styles.flip}>
            <Entypo  name="camera" size={24} color="#BDBDBD" />
            </View>
            
          </TouchableOpacity>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginHorizontal: 16,
	},
	camera: {
		height: 240,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center'
	},
  flip:{
    borderWidth: 1,
    borderRadius: 50,
    color: '#fff',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  }
});
