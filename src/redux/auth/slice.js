import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './operations';

const initialState = {
  isAuth: false,
  user: null,
  roles: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Temporary solution until a logout endpoint is created
    signOut: () => {
      localStorage.removeItem('token');
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        state.error = null;
        state.user = user;
        state.roles = user.roles.map((role) => role.name);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { reducer, actions } = authSlice;
export const { signOut } = actions;
