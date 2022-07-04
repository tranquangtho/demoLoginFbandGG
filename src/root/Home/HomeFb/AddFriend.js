import { View, Text,ImageBackground, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



export default function AddFriend() {
  const dispatch=useDispatch()
  const Friend= useSelector(state=>state.friend.addFriend)
  console.log(Friend);
  const addFriend=()=>{
    console.log();
  }
  return (
    <ScrollView style={{flex:1}}>
      {Friend.map((a)=>{
        return(<View style={{height:70,width:"90%",margin:5,borderTopWidth:0.6}}>
         <View style={{margin:5,flexDirection:"row",}}>
          <View style={{flexDirection:"row"}}>
          <Image source={{uri:a.imageURL}} style={{height:60,width:60,borderRadius:5}}/>
          <Text style={{color:"black",marginTop:20,marginLeft:10,fontSize:17}}>{a.name}</Text>
          </View>
          <View style={{marginLeft:40,justifyContent:"center",height:60,width:100}}>
            <TouchableOpacity style={{borderWidth:0.8,alignItems:"center",margin:2,backgroundColor:"#4c93ff"}} onPress={addFriend}>
              <Text style={{color:"white",fontSize:15}}>Chấp Nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:0.8,alignItems:"center",margin:2,}}>
              <Text style={{color:"#181819",fontSize:15}}>Xoá Yêu Cầu</Text>
            </TouchableOpacity>
          </View>
         </View>
        </View>)
      })}
    </ScrollView>
  )
}