import { View, Text, ImageBackground, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { img } from '../../asset'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMater from 'react-native-vector-icons/MaterialIcons';



export default function Profile() {
  const avatar = useSelector(state => state.user.user)
  return (
    <View>

      <ImageBackground source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.YeVkVtkCudflYHfWu5bC6wHaEo&pid=Api&P=0&w=280&h=175" }} style={{ height: 260}}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity>
          <IconMater name={"menu"} size={30} color="white" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
        <Text style={{color:"white", fontSize:20,marginLeft:20}}>Profile</Text>
        </View>
      </ImageBackground>
      <View style={{ alignItems: "center",position:"absolute",marginTop:150,marginHorizontal:120 }}>
          <Image source={{ uri: avatar.imageURL }} style={{ height: 180, width: 180, marginTop: 0 ,borderRadius:100}} />
          <Text style={{ color: "black", fontSize: 20, marginTop: 10}}>{avatar.name}</Text>
        </View>
    </View>
  )
} 