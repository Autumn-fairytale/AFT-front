import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut, signUp } from './operations';

const initialState = {
  isAuth: false,
  user: null,
  roles: [],
  isLoading: false,
  error: null,
};

// Common handler function for signIn and signUp
const handleEnterToSystem = (state, action) => {
  const { user } = action.payload;
  state.isAuth = true;
  state.isLoading = false;
  state.error = null;
  state.user = user;
  state.roles = user.roles.map((role) => role.name);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sign in
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        handleEnterToSystem(state, action);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      // sign out
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, () => {
        localStorage.removeItem('token');
        return {
          ...initialState,
        };
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      // sign up
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        handleEnterToSystem(state, action);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { reducer, actions } = authSlice;
