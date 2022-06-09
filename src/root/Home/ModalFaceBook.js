import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {img} from '../../asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const ModalFaceBook = props => {
  const  {name, setPost, post,favorite,setFavorite} = props
   const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState();
  const [isIndex,setIsIndex]=useState(0)
  // const dispatch= useDispatch()
  const onChangeText = val => setText(val);
  const newItem = {
    id:  Date.now(),
    time: Date.now(),
    text,
    favorite
  }

  const onPost = async (data) => {
    let newPost = [...post]
    newPost.push(newItem)
    setPost(newPost) 
    setIsIndex(isIndex+1)
    // dispatch({type:"Post", data:data})
    setModalVisible(!modalVisible);
    // AsyncStorage.setItem("@Post",JSON.stringify(post))

  };
 

  return (
    <View style={styles.modal}>
      <Modal animationType="slide" transparent={false} visible={modalVisible} statusBarTranslucent={false}>
        <View>
          <View style={{flexDirection: 'row', marginTop:10}}>
            <Image source={img.imgLogin} style={styles.avatar} />
            <Text style={{color: 'black', fontSize: 20}}>{name}</Text>
          </View>
          <Pressable style={{backgroundColor: '#f9ffb1'}}>
            <TextInput
              maxLength={999}
              multiline
              numberOfLines={10}
              placeholder="bạn đang nghĩ gì?"
              onChangeText={onChangeText}
            />
          </Pressable>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              margin: 10,
              height: 50,
              width: 50,
              backgroundColor: 'blue',
            }}>
            <TouchableOpacity onPress={onPost}>
              <Text>Đăng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection:"row",height:50,alignItems:"center",paddingLeft:10,backgroundColor:"white"}}>
            <Image source={img.imgLogin} style={{height:35,width:35,marginRight:20,borderRadius:50}}/>
      <Pressable onPress={() => setModalVisible(true)} style={{borderWidth:1,width:"70%",height:35,borderRadius:30,justifyContent:"center"}} >
        <Text style={{marginLeft:20}}>bạn đang nghĩ gì</Text>
      </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modal: {
    borderWidth: 0.5,
    marginTop:10
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
export default ModalFaceBook;
