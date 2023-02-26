// import db from "../../firebase/config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
//   import { updateUserProfile, authStateChange, authSignOut } from "./authReduser";

function authSingUpUser({ email, nickname, password }) {
	return async (dispatch, setState) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = await auth.currentUser;
			await updateProfile(user, {
				displayName: nickname,
			});

			console.log('RegisterUser', user);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		}
	};
}

function authSingInUser({ email, password }) {
	return async (dispatch, setState) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);

			console.log('InOuthUser', user);
		}  catch (error) {
      console.log(error.code, error.message);
    }
	};
}

// function authSingOutUser({ email, password }) {
//     return async (dispatch, setState) => {}
// }

export {
	authSingUpUser,
	authSingInUser,
	// authSingOutUser,
  // authStateChangedUser,
};