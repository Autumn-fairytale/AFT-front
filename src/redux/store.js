import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as authReducer } from '@/redux/auth/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createDishReducer from './createDish/createDishSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['createDish'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  createDish: createDishReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
