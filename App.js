import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store,{persistor} from './src/root/login/store';
import persistStore from 'redux-persist/es/persistStore';
import Google from './src/root/login/Google';
export default function App() {
    return(
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
    )

}