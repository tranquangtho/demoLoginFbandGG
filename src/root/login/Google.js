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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {img, icon} from '../../asset';
import ModalFaceBook from './ModalFaceBook';
import {useNavigation} from '@react-navigation/native';
import { Value, log } from 'react-native-reanimated';
import ModalComment from './ModalComment';
const Google = () => {
  const navigation = useNavigation();

  const [info, setInfo] = useState('');
  const [post, setPost] = useState('');
  useEffect(() => {

    getDataG();
  }, [info]);
  const removeData = async () => {
    try {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    } catch (error) {
        console.log(error);
    }
  }

  const getDataG = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@UserName');
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue);
        setInfo(value.name);
      }
    } catch (error) {
      console.log(error);
    }
  };


 
  const [count, setCount] = useState(0);
  const [like,setLike]=useState(false)
  // const onLike=(id)=>{
  //   setLike(()=>{
  //     return like.map((post)=>{
  //       if(post.id==id)
  //       return {...post,isLike: !post.isLike}
  //       return post
  //     })
  //   })
  // }

  const renderItem = (item) => {
    return (
      <View style={styles.posts}>
      <View style={styles.info}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={img.imgLogin} style={styles.imgAvatar} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>{info}</Text>
          </View>
        </View>
        <TouchableOpacity >
          <Image source={icon.cancel} style={styles.cancel} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{item.item.text}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      { !item.item.isLike==false
      ?
        <TouchableOpacity onPress={onLike}>
          <Image source={icon.like} style={styles.dislike} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={onLike}>
          <Image source={icon.like} style={styles.like} />
        </TouchableOpacity>
      }
        
        <Text style={{fontSize: 50}}>{count}</Text>
       {/* <ModalComment /> */}
      </View>
    </View>
    );
  };
  return (
    <View>
      <ModalFaceBook name={info} setPost={setPost} post={post}/>
      <TouchableOpacity onPress={removeData}><Text>hello</Text></TouchableOpacity>
      <View>
          <FlatList
          data={post}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dislike:{
    backgroundColor:"blue",
    height: 50,
    width: 50,
  },
  like: {
    height: 50,
    width: 50,
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
  },
  imgAvatar: {
    height: 50,
    width: 50,
  },
  posts: {
    height: 200,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
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
