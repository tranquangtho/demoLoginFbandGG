import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogout } from '../../../redux/reducer/userReducer';
import { useNavigation } from '@react-navigation/native';
import { img } from '../../../asset';

export default function Menu() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const addUserName = useSelector(state => state.user.user)
    
    const onLogOut = () => {
        dispatch(userLogout(addUserName))
        navigation.navigate("Login")

      }
  return (
    <ImageBackground source={img.backgroundHomeFacebook} style={styles.imageBackground} >
      <TouchableOpacity onPress={onLogOut}>
      <Text>đăng xuất</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  imageBackground:{
    flex:1
  }
})