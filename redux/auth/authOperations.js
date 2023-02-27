// import db from "../../firebase/config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
  import { updateUserProfile, authStateChange, authSignOut } from "./authReducer";

function authSingUpUser({ email, nickname, password }) {
	return async (dispatch, setState) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = await auth.currentUser;
			await updateProfile(user, {
				displayName: nickname,
			});

			console.log('RegisterUser', user);

      dispatch(
        updateUserProfile({
          userId: user.uid,
          nikname: user.displayName,
          email: user.email,
        })
      )
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

function authStateChangedUser() {
  return async (dispatch, setState) => {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            updateUserProfile({
              userId: user.uid,
              nikname: user.displayName,
              email: user.email,
            })
          );
          dispatch(authStateChange(true));
        }
        return;
      });
    } catch (error) {
      console.log(error.code, error.message);
    }
  };
}

function authSingOutUser() {
  return async (dispatch, setState) => {
    try {
      await signOut(auth);
      dispatch(authSignOut());
    } catch (error) {
      console.log(error.code, error.message);
    }
  };
}

export {
	authSingUpUser,
	authSingInUser,
	authSingOutUser,
  authStateChangedUser,
};
