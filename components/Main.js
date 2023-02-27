import React, { useState, useEffect }from "react";
import { NavigationContainer } from '@react-navigation/native';
import useRoute from '../router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authStateChangedUser } from "../redux/auth/authOperations";

function Main () {
    const { stateChange } = useSelector(state => state.auth);
const [user, setUser] = useState(null);
// const auth = getAuth();
const dispatch = useDispatch();
// onAuthStateChanged(auth, user => {setUser(user)
// });
useEffect(() => {
    dispatch(authStateChangedUser());
}, [])

const routing = useRoute(stateChange);
    return ( 
        <NavigationContainer>{routing}</NavigationContainer>
    )
}    

export default Main;