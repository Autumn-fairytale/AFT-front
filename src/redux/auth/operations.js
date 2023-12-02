import { publicInstance } from '@/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await publicInstance.post(
        `/users/login`,
        { email, password },
        config
      );

      // will be removed when installing the redux-persist configuration
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
