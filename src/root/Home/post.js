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
import React, { useState, useEffect } from 'react';
import { img } from '../../asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { PostNew } from '../action/postFacebook';

const PostFacebook = (props) => {
  const addUserName = useSelector(state => state.user.user)
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()
  // const comment=useSelector(state=>state)
  const onChangeText = val => setText(val);
  const [text, setText] = useState();
  const posts = useSelector(state => state.post.post)
;
  const handlePost = () => {

    const newItem = {
      id: Date.now(),
      time: Date.now(),
      text,
      comment: [],
      isLike: false
    }
    const newList = [...posts, newItem]
    dispatch(PostNew(newList))
    setModalVisible(!modalVisible)

  }



  return (
    <View style={styles.modal}>
      <Modal animationType="slide" transparent={false} visible={modalVisible} statusBarTranslucent={false}>
        <View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={{ uri: addUserName?.imageURL }} style={styles.avatar} />
            <Text style={{ color: 'black', fontSize: 20 }}>{addUserName?.name}</Text>
          </View>
          <Pressable style={{ backgroundColor: '#f9ffb1' }}>
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
            <TouchableOpacity onPress={handlePost}>
              <Text>Đăng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: "row", height: 50, alignItems: "center", paddingLeft: 10, backgroundColor: "white" }}>
        <Image source={{ uri: addUserName?.imageURL }} style={{ height: 35, width: 35, marginRight: 20, borderRadius: 50 }} />
        <Pressable onPress={() => setModalVisible(true)} style={{ borderWidth: 1, width: "70%", height: 35, borderRadius: 30, justifyContent: "center" }} >
          <Text style={{ marginLeft: 20 }}>bạn đang nghĩ gì</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modal: {
    borderWidth: 0.5,
    marginTop: 10
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
export default PostFacebook;
