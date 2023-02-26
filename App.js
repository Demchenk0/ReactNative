import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import useRoute from './router';
import { store } from './redux/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App() {
	const [user, setUser] = useState(null);
	const auth = getAuth();
	const routing = useRoute(user);
	onAuthStateChanged(auth, user => {setUser(user)
	});

	return (
		<Provider store={store}>
			<NavigationContainer>{routing}</NavigationContainer>
		</Provider>
	);
}
