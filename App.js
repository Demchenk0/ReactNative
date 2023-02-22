import * as Font from 'expo-font';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import useRoute from './router';
export default function App() {
	const routing = useRoute({});
	// const [fontsLoaded] = useFonts({
	//   Roboto_400Regular,
	//   Roboto_500Medium,
	//   Roboto_900Black,
	// });
	// useEffect(() => {
	//   if (fontsLoaded) {
	//     SplashScreen.hideAsync();
	//   }
	// }, [fontsLoaded]);

	// if (!fontsLoaded) {
	//   return null;
	// }
	return <NavigationContainer>{routing}</NavigationContainer>;
}
