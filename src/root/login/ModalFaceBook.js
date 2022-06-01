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
const ModalFaceBook = props => {
  const  {name, setPost, post} = props
   const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState();

  const onChangeText = val => setText(val);

  const onPost = async () => {
    const newItem = {
      id:  Date.now(),
      time: Date.now(),
      text
    }
    let newPost = [...post]
    newPost.push(newItem)
    setPost(newPost)
    setModalVisible(!modalVisible);
  };

  useEffect(()=>{
     AsyncStorage.setItem("@Post",post)
  
  },[post])



  return (
    <View style={styles.modal}>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View>
          <View style={{flexDirection: 'row', margin: 10}}>
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
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>bạn đang nghĩ gì</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  modal: {
    borderWidth: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
export default ModalFaceBook;
