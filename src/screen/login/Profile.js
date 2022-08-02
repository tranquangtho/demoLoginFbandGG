import { View, Text, ImageBackground, Image, Touchable, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconE from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogout } from '../../redux/reducer/userReducer';
import { useRoute } from '@react-navigation/native';
import { currentLogin } from '../../redux/reducer/CurrentLogin';

export default function Profile({ navigation }) {
  const avatar = useSelector(state => state.user.user)
  const current= useSelector(state=>state.current.current)
  const route= useRoute()
  const dispatch = useDispatch()



  const [arr,setArr]=useState({})
  const onLogOut = async () => {
     dispatch(currentLogin(arr))
    navigation.navigate("Login")
  }



  const comeBack = () => {
    navigation.navigate("Google")
  }




  return (
    <View style={styles.white}>
      <View style={styles.find}>
        <TouchableOpacity onPress={comeBack}>
          <Icon name={"arrow-left"} size={26} color="black" style={styles.iconMaster} />
        </TouchableOpacity>
        <View style={styles.rowTextInput}>
          <IconE name={"search1"} size={16} color="black" style={styles.search} />
          <TextInput placeholder='Tìm Kiếm' style={styles.textInput} />
        </View>
      </View>
      <View style={styles.rowBlack}></View>
      <Image source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.YeVkVtkCudflYHfWu5bC6wHaEo&pid=Api&P=0&w=280&h=175" }} style={styles.ImageBackground}/>
      <View style={styles.boxAvatar}>
        <Image source={{ uri: current.imageURL }} style={styles.avatar} />
        <Text style={styles.name}>{current.name}</Text>
      </View>
      <TouchableOpacity onPress={onLogOut} style={styles.logOut}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  rowBlack:{
    width:"100%",
    borderWidth:0.2,
    marginTop:5,
    marginBottom:15
  },
  white:{
    borderLeftColor:"white"
  },
  textInput:{
  },
  search:{
    marginTop:12
  },
  rowTextInput: {
    flexDirection: 'row',
    backgroundColor:"#e7e7ea",
    width:"87%",
    borderRadius:50,
    paddingLeft:15
  },
  find: {
    flexDirection: "row",
    marginVertical:5,
    height:40
  },
  logOut: {
    backgroundColor: "yellow",
    width: 100,
    margin: 10,
    padding: 10
  },
  ImageBackground: {
    height: 260,
    marginHorizontal:10,
    borderRadius:10
  },
  boxIcon: {
    flexDirection: "row"
  },
  iconMaster: {
    marginLeft: 10,
    marginTop: 8,
    marginRight: 10
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