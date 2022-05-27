import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../root/Home/Home';
import FaceBook from '../root/login/FaceBook';
import Google from '../root/login/Google';
import Login from '../root/login/Login';
import React from 'react';

const MainStack = createNativeStackNavigator()

 export default function MyTabs() {
  return (
      <MainStack.Navigator screenOptions={{headerShown: false }}>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Google" component={Google} />
        <MainStack.Screen name="FaceBook" component={FaceBook} />
      </MainStack.Navigator>
  );
}
