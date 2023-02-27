import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    nickname: null,
    email: null,
    stateChange: false,
  };

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
        //!Екшенсы
		updateUserProfile: (state, { payload }) => ({
			...state,
			userId: payload.userId,
			nickname: payload.nikname,
			email: payload.email,
		}),
		authStateChange: (state, { payload }) => ({
			...state,
			stateChange: payload,
		}),
		authSignOut: () => initialState,
	},
});


const { actions, reducer } = authSlice;

export const { updateUserProfile, authStateChange, authSignOut } = actions;

export default reducer;