import * as Font from 'expo-font';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import useRoute from './router';
export default function App() {
	const routing = useRoute({});
	return <NavigationContainer>{routing}</NavigationContainer>;
}
