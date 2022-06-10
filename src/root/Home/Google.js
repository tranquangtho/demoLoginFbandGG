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
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { img, icon } from '../../asset';
import ModalFaceBook from './ModalFaceBook';
import { useNavigation } from '@react-navigation/native';
import { Value, log } from 'react-native-reanimated';
import ModalComment from './ModalComment';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../action/Post';
import { addNewInfo } from '../action/user';
import { newDelete } from '../action/Post';


const Google = (props) => {
  const navigation = useNavigation();
    const dispatch= useDispatch()

  const addPost=useSelector(state=>state.add.post)
  const addUserName=useSelector(state=>state.user)
  // const addInfo=useSelector(state=>state.add.info)
  // const addContent=useSelector(state=>state.add.post)
  // const addComment=useSelector(state=>state.add.post)
  // const addLike=useSelector(state=>state.add.post)
  // const addCountLike=useSelector(state=>state.add.post)
  // const addCountComment=useSelector(state=>state.add.post)
  // const text=useSelector(state=>state.add.post)

  const onChangeText = val => setText(val);
  const [text, setText] = useState();

  const handlePost =()=>{
    const newItem = {
      id:  Date.now(),
      time: Date.now(),
      text,
      addUserName
    }
    const action= addNewPost(newItem)
    dispatch(action)
  }
  const deletePost =(post)=>{
    console.log("posttttt:",post.id);
    const removePostId = post.id
    const action = newDelete(removePostId)
    dispatch(action)
  }
  const ItemPost = ({ item, index }) => {
    return (
      <View style={styles.posts}>
        <View style={styles.info}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={{uri:addUserName?.user?.imageURL}} style={styles.imgAvatar} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{addUserName?.user?.name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={deletePost} >
            <Image source={icon.cancel} style={styles.cancel} />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, color: "black" }}>{text}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text>aaa</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around", borderTopWidth: 0.4, padding: 10 }}>
          {/* {favorite
            ?
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={icon.like} style={styles.dislike} />
              <Text style={{ fontSize: 16 }}>Bỏ thích</Text>
            </TouchableOpacity>
            : */}
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
              <Image source={icon.like} style={styles.like} />
              <Text style={{ fontSize: 16 }}>Thích</Text>
            </TouchableOpacity>

          {/* } */}
          <ModalComment />
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
      <ModalFaceBook post={addPost} handlePost={handlePost} onChangeText={onChangeText}/>
      <FlatList
        data={addPost}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (<ItemPost item={item} index={index}  />)}
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
