
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
import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changePost } from '../../redux/reducer/PostReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
          <View style={styles.boxTopF}>
            <View style={styles.boxTopC}>
              <TouchableOpacity onPress={setModalVisible}>
                <Icon name={"arrow-left"} size={23} color="black" />
              </TouchableOpacity>
              <Text style={styles.boxTopCreatePost}>Tạo bài viết</Text>
            </View>
            {text
              ?
              <TouchableOpacity onPress={handlePost} style={styles.boxTopButtonPostBlue} >
                <Text style={styles.textButton} >Đăng</Text>
              </TouchableOpacity>
              :
              <View style={styles.boxTopButtonPostWhite}>
                <Text style={styles.textButton} >Đăng</Text>
              </View>
            }
          </View>
          <View style={styles.viewCut}></View>
          <ScrollView>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: "center" }}>
              <Image source={{ uri: addUserName?.imageURL }} style={styles.avatar} />
              <Text style={styles.name}>{addUserName?.name}</Text>
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
      <View style={styles.boxGoogle}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={{ uri: addUserName?.imageURL }} style={styles.avatarGoogle} />
        </TouchableOpacity>
        <Pressable onPress={() => setModalVisible(true)} style={styles.textInput} >
          <Text style={{ marginLeft: 20 }}>bạn đang nghĩ gì</Text>
        </Pressable>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: "70%",
    height: 35,
    borderRadius: 30,
    justifyContent: "center"
  },
  name: {
    color: 'black',
    fontSize: 20
  },
  boxGoogle: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "white"
  },
  avatarGoogle: {
    height: 35,
    width: 35,
    marginRight: 20,
    borderRadius: 50
  },
  viewCut: {
    height: 0.5,
    width: "100%",
    borderWidth: 0.2
  },
  modal: {
    borderWidth: 0.5,
    // marginTop: 10
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  boxTopF: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  boxTopC: {
    flexDirection: "row"
  },
  boxTopCreatePost: {
    fontSize: 18,
    color: "black",
    paddingLeft: 10
  },
  boxTopButtonPostBlue: {
    backgroundColor: "#0d76f4",
    height: 30,
    width: 60
  },
  textButton: {
    fontSize: 18,
    color: "white",
    paddingLeft: 10
  },
  boxTopButtonPostWhite: {
    backgroundColor: "#d5d5d5",
    height: 30,
    width: 60
  },
  textButton: {
    fontSize: 18,
    color: "#474d4d",
    paddingLeft: 10
  },
  textButton: {},
});
export default ModalFaceBook;
