import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, role: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase('action type', (state, action) => {
      console.log(action.payload);
      return state;
    });
  },
});

export const authReducer = authSlice.reducer;
