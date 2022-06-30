
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { img } from '../../asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changePost } from '../reducer/PostReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalView from 'rn-modal-view'

const ModalFaceBook = props => {
  const { addUserName } = props
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.post)
  // const [isVisible, setIsVisible] = useState(false)
  // const comment=useSelector(state=>state)
  const onChangeText = val => setText(val);
  const [text, setText] = useState();
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const handlePost = () => {

    const newItem = {
      id: Date.now(),
      time: Date.now(),
      text,
      isLike: false,
      comment: [],
      count: 0
    }
    const newList = [...posts, newItem]
    setData(newList)
    dispatch(changePost(newList))
    setModalVisible(!modalVisible)
  }

  return (

    <View style={styles.modal}>

      <Modal animationType="slide" transparent={false} visible={modalVisible} statusBarTranslucent={false}>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={setModalVisible}>
              <Icon name={"arrow-left"} size={23} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 18, color: "black", paddingLeft: 10 }}>Tạo bài viết</Text>
            </View>
            {text
              ?
              <TouchableOpacity onPress={handlePost} style={{ backgroundColor: "#0d76f4", height: 30, width: 60 }} >
                <Text style={{ fontSize: 18, color: "wh", paddingLeft: 10 }} >Đăng</Text>
              </TouchableOpacity>
              :
              <View style={{ backgroundColor: "#d5d5d5", height: 30, width: 60 }}>
                <Text style={{ fontSize: 18, color: "#474d4d", paddingLeft: 10 }} >Đăng</Text>
              </View>
            }
          </View>
          <View style={{ height: 0.5, width: "100%", borderWidth: 0.2 }}></View>
          <ScrollView>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: "center" }}>
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
          </ScrollView>
        </View>
      </Modal>
      <View style={{ flexDirection: "row", height: 50, alignItems: "center", paddingLeft: 10, backgroundColor: "white" }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <Image source={{ uri: addUserName?.imageURL }} style={{ height: 35, width: 35, marginRight: 20, borderRadius: 50 }} />
        </TouchableOpacity>
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
    // marginTop: 10
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
});
export default ModalFaceBook;
