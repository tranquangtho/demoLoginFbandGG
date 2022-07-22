import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaceBook from '../screen/Home/ModalFaceBook';
import Google from '../screen/Home/Google';
import Login from '../screen/login/Login';
import React from 'react';
import ModalFaceBook from '../screen/Home/ModalFaceBook';
import Comment from '../screen/Home/Comment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import friend from '../screen/Home/HomeFb/addFriend';
import Notification from '../screen/Home/HomeFb/Notification';
import Menu from '../screen/Home/HomeFb/Menu';
import Register from '../screen/login/Register';
// import Google from '../root/Home/Google';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { icon } from '../asset';
import Profile from '../screen/login/Profile';
import { useRoute } from '@react-navigation/native';
const HomeStack = createMaterialTopTabNavigator();
const MainStack = createNativeStackNavigator()

export default function MyTabs() {

  const { height, width } = Dimensions.get('window');

  const HomeFb = () => {
    const route =useRoute()

    console.log('qqqqq', route);

    return (
      <HomeStack.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
        <HomeStack.Screen name="Google" component={Google} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.View,{ backgroundColor: focused ? '#FFE8D1' : '#fff'}]}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={[{ tintColor: focused ? '#E89E0D' : '#D4DCE4'},styles.image]} />
              {focused && <Text style={[{ color: focused ? '#E89E0D' : '#D4DCE4' },styles.text]}></Text>}
            </View>
          )
        }} />
        <HomeStack.Screen name="friend" component={friend} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.View,{ backgroundColor: focused ? '#FFE8D1' : '#fff'}]}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={[{ tintColor: focused ? '#E89E0D' : '#D4DCE4'},styles.image]} />
              {focused && <Text style={[{ color: focused ? '#E89E0D' : '#D4DCE4' },styles.text]}></Text>}
            </View>
          )
        }} />
        <HomeStack.Screen name="notification" component={Notification} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.View,{ backgroundColor: focused ? '#FFE8D1' : '#fff'}]}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={[{ tintColor: focused ? '#E89E0D' : '#D4DCE4'},styles.image]} />
              {focused && <Text style={[{ color: focused ? '#E89E0D' : '#D4DCE4' },styles.text]}></Text>}
            </View>
          )
        }} />
        <HomeStack.Screen name="Menu" component={Menu} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.View,{ backgroundColor: focused ? '#FFE8D1' : '#fff'}]}>
              <Image
                source={icon.Home}
                resizeMode='contain'
                style={[{ tintColor: focused ? '#E89E0D' : '#D4DCE4'},styles.image]} />
              {focused && <Text style={[{ color: focused ? '#E89E0D' : '#D4DCE4' },styles.text]}></Text>}
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
const styles = StyleSheet.create({
  View: {
    flexDirection: 'column',
     alignItems: 'center', 
     borderRadius: 20, 
     height: 30,
      width: 30 
  },
  image: {
    width: 24,
     height: 24,
      alignItems: 'center', 
      justifyContent: 'center',
  },
  text: {
    fontSize: 12,
     fontFamily: 'Inter',
      margin: 5
  },
})
