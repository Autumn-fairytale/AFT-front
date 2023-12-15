import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unreadCount: 0,
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload;
    },
  },
});

export const { setUnreadCount } = notificationsSlice.actions;

export default notificationsSlice.reducer;
