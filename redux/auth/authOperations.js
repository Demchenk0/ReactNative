// import { db } from "../../firebase/config";

function authSingUpUser({ email, password, nickname }) {
    return async (dispatch, setState) => {
        try {
            const user = await db.auth().createUserWithEmailAndPassword(email, password);
            console.log('user', user);
        } catch (error) {
            console.log('error', error);
            console.log('error.message', error.message);
        }
    }
};
// function authSingInUser({ email, password }) {
//     return async (dispatch, setState) => {}
// }
// function authSingOutUser({ email, password }) {
//     return async (dispatch, setState) => {}
// }


export {
    authSingUpUser,
    // authSingInUser,
    // authSingOutUser,
  };