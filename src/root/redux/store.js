import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './redux'
import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware } from 'redux';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whileList: ['user'],
  // blacklist: ['post']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}, applyMiddleware)
export const persistor = persistStore(store)
export default store;