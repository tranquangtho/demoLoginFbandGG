import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList,
  ImageBackground
} from 'react-native';
import React, { useState, useEffect, memo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { img, icon } from '../../asset';
import ModalFaceBook from './ModalFaceBook';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../action/Post';
import { addNewInfo } from '../action/user';
import { newDelete } from '../action/Post';
import { addNewLike } from '../action/Post';
import { logOutUser } from '../action/user';
import Comment from './Comment';

const Google = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const addUserName = useSelector(state => state.user.user)
  const addPost = useSelector(state => state.add.post)



  const onLogOut=()=>{
    dispatch(logOutUser(addUserName))
    navigation.navigate("Login")
    AsyncStorage.clear()
  }
 

  const ItemPost = ({ item, index }) => {
  const [isLike,setIsLike]=useState(false)

  const [count,setCount]=useState(0)
    const deleteData=(data)=>{
    const removePhotoId = item.id;
     const value= addPost.filter(a=>a.id !==removePhotoId)
    const action = newDelete(value);
    dispatch(action);
    }
    const likeNewPost=(a)=>{

      if(isLike){
        setCount(isLike - 1)
         item.isLike=!isLike
      }else{
        setCount(isLike + 1)
          item.isLike=!isLike
      }
      setIsLike(!isLike)
      // dispatch(addNewLike(addPost))
      console.log(addPost);
    }
    return (
      <View style={styles.posts}>
        <View style={styles.info}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={{uri:addUserName?.imageURL}} style={styles.imgAvatar} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{addUserName?.name}</Text>
            </View>
          </View>
          <TouchableOpacity  onPress={deleteData} >
            <Image source={icon.cancel} style={styles.cancel} />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, color: "black" }}>{item.text}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text>{count}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around", borderTopWidth: 0.4, padding: 10 }}>
          {!isLike
            ?
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={likeNewPost}  >
              <Image source={icon.like} style={styles.like} />
              <Text style={{ fontSize: 16 }}>thích</Text>
            </TouchableOpacity>
            :
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} onPress={likeNewPost} >
            <Image source={icon.blueLike} style={styles.like} />
            <Text style={{ fontSize: 16 }}>bo Thích</Text>
          </TouchableOpacity>

          }

          <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate("Comment")}>
            <Image source={icon.comment} style={{height:24,width:26}}/>
            <Text>bình luận</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image source={icon.cancel} style={{ height: 20, width: 20, marginRight: 5 }} />
            <Text style={{ fontSize: 18 }}>Chia Sẻ</Text>
          </View>
        </View>
      </View>
    )
  }
 
  return (
    <View style={{ backgroundColor: "#bec2b8", height: "100%" }}>
      <TouchableOpacity onPress={onLogOut}>
        <Text>LogOut</Text>
      </TouchableOpacity>
      <ModalFaceBook addUserName={addUserName} addPost={addPost} />
      <FlatList
        data={addPost}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <ItemPost item={item} index={index} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dislike: {
    backgroundColor: "blue",
    height: 30,
    width: 30,
  },
  like: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  creatPost: {
    margin: 10,
    borderWidth: 2,
    color: 'black',
  },
  cancel: {
    height: 20,
    width: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  imgAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10
  },
  posts: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white",

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Google;
