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
import Comment from './Comment';
import { changePost,updatePost } from '../reducer/PostReducer';
import { userLogout } from '../reducer/itemReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import produce from 'immer'
const Google = (props) => {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const addUserName = useSelector(state => state.user.user)
  const { posts } = useSelector(state => state.post)
  const ItemPost = ({item,index}) => {
       
    const [isLike, setIsLike] = useState(item.isLike)
  const [count, setCount] = useState(0)
  // const originalPost = posts.slice();
    // console.log(originalPost);

    const deleteData = () => {
      const removePhotoId = item.id;
      const value = posts.filter(a => a.id !== removePhotoId)
      const action = changePost(value);
      dispatch(action);
    }

    const likeNewPost =  ()=> {
  const originalPost = posts.slice();
      const index = originalPost.indexOf(item)
      
      if (isLike) {
        originalPost.splice(index,1,({
          comment:item.comment,
          id:item.id,
          isLike:false,
          text:item.text,
          time:item.time
        }))
        setCount(isLike - 1)
        }
      else {
        originalPost.splice(index,1,({
          comment:item.comment,
          id:item.id,
          isLike:true,
          text:item.text,
          time:item.time
        }))
        setCount(isLike + 1)
      }
      // setData(originalPost)
      setIsLike(!isLike)
      const newList =[...originalPost]
      dispatch(changePost(newList))
    }

    return (
      <View style={styles.posts}>
        <View style={styles.info}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={{ uri: addUserName?.imageURL }} style={styles.imgAvatar} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{addUserName?.name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={deleteData} >
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
              {/* <Icon name={"fa-solid fa-thumbs-up"} style={styles.like} /> */}
              <Icon name={"thumbs-up"}  size={30} color="black"/>
              <Text style={{ fontSize: 16 }}>thích</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} onPress={likeNewPost} >
              <Icon name={"thumbs-up"} size={30} color="blue" />
              <Text style={{ fontSize: 16 }}>Bỏ Thích</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={{ flexDirection: "row",alignItems:"center" }} onPress={() => navigation.navigate("Comment",item)}>
            <Icon name={"comment"} size={30} color="black"  />
            <Text style={{fontSize:16}}>Bình luận</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row",alignItems:"center"  }}>
          <Icon name={"share-square"} size={26} color="black"  />
            <Text style={{ fontSize: 16 , }}>Chia Sẻ</Text>
          </View> 
        </View>
      </View>
    )
  }

  return (
    <ImageBackground source={img.groundRd} style={{ backgroundColor: "#bec2b8", height: "100%" }}>
      <ModalFaceBook addUserName={addUserName} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <ItemPost item={item} index={index} />}
      />
    </ImageBackground>
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
    marginBottom: 10,
    marginTop: 2,
    // borderRadius: 10,
    borderWidth: 0.5,
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
