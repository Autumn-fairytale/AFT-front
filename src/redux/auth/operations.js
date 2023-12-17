import { privateInstance, publicInstance } from '@/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await publicInstance.post(
        `/users/login`,
        { email, password },
        config
      );

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
      const { data } = await privateInstance.post(`/users/logout`, config);

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
      const { data } = await publicInstance.post(
        `/users/register`,
        { firstName, lastName, email, password },
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateInstance.get('/users/current-user');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
