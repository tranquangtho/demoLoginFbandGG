import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaceBook from '../root/Home/ModalFaceBook';
import Google from '../root/Home/Google';
import Login from '../root/login/Login';
import React from 'react';
import ModalFaceBook from '../root/Home/ModalFaceBook';
import Comment from '../root/Home/Comment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddFriend from '../root/Home/HomeFb/AddFriend';
import Notification from '../root/Home/HomeFb/Notification';
import Menu from '../root/Home/HomeFb/Menu';
import Register from '../root/login/Register';
// import Google from '../root/Home/Google';
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { icon } from '../asset';
import Profile from '../root/login/Profile';
const HomeStack = createMaterialTopTabNavigator();
const MainStack = createNativeStackNavigator()

export default function MyTabs() {

  const { height, width } = Dimensions.get('window');

  const HomeFb = () => {
    return (
      <HomeStack.Navigator  screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
      }}>
        <HomeStack.Screen name="Google"  component={Google} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ backgroundColor: focused ? '#FFE8D1' : '#fff', flexDirection: 'column', alignItems: 'center', borderRadius: 20, height:30, width:30}}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={{
                  width: 24, height: 24, alignItems: 'center', justifyContent: 'center',
                  tintColor: focused ? '#E89E0D' : '#D4DCE4'
                }} />
              {focused && <Text style={{ color: focused ? '#E89E0D' : '#D4DCE4', fontSize: 12, fontFamily: 'Inter', margin: 5 }}></Text>}
            </View>
          )
        }} />
        <HomeStack.Screen name="AddFriend" component={AddFriend} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ backgroundColor: focused ? '#FFE8D1' : '#fff', alignItems: 'center', borderRadius: 20, height:30, width:30 }}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={{
                  width: 24, height: 24, alignItems: 'center', justifyContent: 'center',
                  tintColor: focused ? '#E89E0D' : '#D4DCE4'
                }} />
              {focused && <Text style={{ color: focused ? '#E89E0D' : '#D4DCE4', fontSize: 12, fontFamily: 'Inter', margin: 5 }}></Text>}
            </View>
          )
        }} />
        <HomeStack.Screen name="notification" component={Notification} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ backgroundColor: focused ? '#FFE8D1' : '#fff', alignItems: 'center', borderRadius: 20, height: 30, width:30 }}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={{
                  width: 24, height: 24, alignItems: 'center', justifyContent: 'center',
                  tintColor: focused ? '#E89E0D' : '#D4DCE4'
                }} />
              {focused && <Text style={{ color: focused ? '#E89E0D' : '#D4DCE4', fontSize: 12, fontFamily: 'Inter', margin: 5 }}></Text>}
            </View>
          )
        }} />
        <HomeStack.Screen name="Menu" component={Menu} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ backgroundColor: focused ? '#FFE8D1' : '#fff', alignItems: 'center', borderRadius: 20, height:30, width:30 }}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={{
                  width: 24, height: 24, alignItems: 'center', justifyContent: 'center',
                  tintColor: focused ? '#E89E0D' : '#D4DCE4'
                }} />
              {focused && <Text style={{ color: focused ? '#E89E0D' : '#D4DCE4', fontSize: 12, fontFamily: 'Inter', margin: 5 }}></Text>}
            </View>
          )
        }} />
      </HomeStack.Navigator>
    )
  }
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Register" component={Register} />
      <MainStack.Screen name="Profile" component={Profile} />
      <MainStack.Screen name="HomeFb" component={HomeFb} />
      <MainStack.Screen name="FaceBook" component={ModalFaceBook} screenOptions={{ headerShown: true }} />
      <MainStack.Screen name="Comment" component={Comment} />
    </MainStack.Navigator>
  );
}
