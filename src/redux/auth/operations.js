import { privateInstance, publicInstance } from '@/api/axios';
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

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await privateInstance.post(`/users/logout`, {}, config);

      localStorage.removeItem('token');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await publicInstance.post(
        `/users/register`,
        { firstName, lastName, email, password },
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
