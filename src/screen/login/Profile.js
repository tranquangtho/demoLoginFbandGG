import { View, Text, ImageBackground, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogout } from '../../redux/reducer/userReducer';

export default function Profile({navigation}) {
  const avatar = useSelector(state => state.user.user)
  const addUserName = useSelector(state => state.user.user)
  const dispatch =useDispatch()
  const onLogOut = () => {
    navigation.navigate("Login")
  }
  const comeBack = () => {
    navigation.navigate("Google")
  }
  return (
    <View>

      <ImageBackground source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.YeVkVtkCudflYHfWu5bC6wHaEo&pid=Api&P=0&w=280&h=175" }} style={styles.ImageBackground}>
        <View style={styles.boxIcon}>
          <TouchableOpacity onPress={comeBack}>
            <Icon name={"arrow-left"} size={30} color="white" style={styles.iconMaster} />
          </TouchableOpacity>
          <Text style={styles.textProfile}>Profile</Text>
        </View>

      </ImageBackground>
      <View style={styles.boxAvatar}>
        <Image source={{ uri: avatar.imageURL }} style={styles.avatar} />
        <Text style={styles.name}>{avatar.name}</Text>
      </View>
      <TouchableOpacity onPress={onLogOut} style={styles.logOut}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  logOut:{

    backgroundColor:"yellow",
    width:100,
    margin:10,
    padding:10
  },
  ImageBackground: {
    height: 260
  },
  boxIcon: {
    flexDirection: "row"
  },
  iconMaster: {
    marginLeft: 10
  },
  textProfile: {
    color: "white",
    fontSize: 20,
    marginLeft: 20
  },
  boxAvatar: {
    alignItems: "center",
    position: "absolute",
    marginTop: 150,
    marginHorizontal: 120
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 100
  },
  name: {
    color: "black",
    fontSize: 20,
    marginTop: 10
  },
})