import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userId: null,
  nikname: null,
  email: null,
  stateChange: false,
	},
	reducers: {
		// actions
		updateUserProfile: (state, { payload }) => ({
			...state,
			userId: payload.userId,
			nikname: payload.nikname,
			email: payload.email,
		}),
		authStateChange: (state, { payload }) => ({
			...state,
			stateChange: payload,
		}),
		authSignOut: () => initialState,
	},
});

console.log('authSlice', authSlice);

const { actions, reducer } = authSlice;

export const { updateUserProfile, authStateChange, authSignOut } = actions;

export default reducer;