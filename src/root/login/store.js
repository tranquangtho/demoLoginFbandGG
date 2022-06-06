import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducer from './redux'
import { configureStore } from '@reduxjs/toolkit'
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
const  store = configureStore({
    reducer:persistedReducer
})
export const persistor=persistStore(store)
export default store;