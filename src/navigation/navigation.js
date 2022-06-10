import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaceBook from '../root/Home/ModalFaceBook';
import Google from '../root/Home/Google';
import Login from '../root/login/Login';
import React from 'react';
import ModalFaceBook from '../root/Home/ModalFaceBook';
const MainStack = createNativeStackNavigator()

 export default function MyTabs() {
  return (
      <MainStack.Navigator screenOptions={{headerShown: false }}>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Google" component={Google} />
        <MainStack.Screen name="FaceBook" component={ModalFaceBook} />
      </MainStack.Navigator>
  );
}
