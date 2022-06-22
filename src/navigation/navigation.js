import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaceBook from '../root/Home/post';
import HomeFacebook from '../root/Home/HomeFacebook';
import Login from '../root/login/Login';
import React from 'react';
import PostFacebook from '../root/Home/post';
import Comment from '../root/Home/Comment';
const MainStack = createNativeStackNavigator()

 export default function MyTabs() {
  return (
      <MainStack.Navigator screenOptions={{headerShown: false }}>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="HomeFacebook" component={HomeFacebook} />
        <MainStack.Screen name="PostFacebook" component={PostFacebook} />
        <MainStack.Screen name="Comment" component={Comment} />
      </MainStack.Navigator>
  );
}
