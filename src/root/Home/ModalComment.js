import { View, Text, Modal,StyleSheet, Image,Pressable, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { icon,img } from '../../asset';
import { useDispatch } from 'react-redux';

import { AsyncStorage } from '@react-native-async-storage/async-storage';
const ModalComment=(props)=> {

  const [modalVisible, setModalVisible] = useState(false);
  const [comment,setComment]=useState('')
  const [textA,setTextA]=useState()
  // const dispatch= useDispatch()
  const onChangeText = val=>{
    setTextA(val)
  }
  const onSend= ()=>{
      const newItem = {
        id:  Date.now(),
        time: Date.now(),
        Like:false,
        textA,
      }
      let newSend = [...comment]
      newSend.push(newItem)
      setComment(newSend)
      // dispatch({type:"Comment", data:data})
    };
    const modalView=()=>{
      setModalVisible(!modalVisible)
    }



  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}  style={styles.modal}>
      <TouchableOpacity onPress={modalView}><Text>aaa</Text></TouchableOpacity>
        <View style={{borderWidth:1,margin:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TextInput placeholder='nhap noi dung' style={{marginLeft:10}}  blurOnSubmit={true} onChangeText={onChangeText}/>
        <TouchableOpacity onPress={onSend}>
        <Image source={icon.cancel} style={{height:20,width:20,marginRight:10}}/>
        </TouchableOpacity>
        </View>
        <FlatList data={comment}
          keyExtractor={item=>item.id}
          renderItem={(item)=>{
            return (
              <View style={{backgroundColor:"#f2edd3",margin:10}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={img.imgLogin} style={{height:50,width:50,borderRadius:50}}/>
                  <Text style={{}}>{props.name}</Text>
                </View>
                <Text>{item.item.textA}</Text>
              </View>
            )
          }}
        />
      </Modal>
      <Pressable onPress={() => setModalVisible(true)} style={{flexDirection:'row',alignItems:"center"}}>
       <Image source={icon.comment} style={{height:20,width:20,marginRight:5}}/>
       <Text  style={{fontSize:16}}>Bình luận</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    modal:
    {marginTop:100
    },
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
  });
  export default ModalComment