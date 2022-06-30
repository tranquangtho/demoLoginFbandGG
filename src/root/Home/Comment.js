import { View, Text, Touchable, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import { img, icon } from '../../asset'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { changePost, updateComment, deleteComment } from '../reducer/PostReducer'
import Google from './Google'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Comment({ navigation }) {
  const dispatch = useDispatch()
  const route = useRoute()
  const [modalVisible, setModalVisible] = useState(false);
  const [textComment, setTextComment] = useState("")
  const onChangeText = value => setTextComment(value)
  const { posts } = useSelector(state => state.post)
  const addUserName = useSelector(state => state.user.user)
  const [comment, setComment] = useState([])

  const DATA = route.params.comment
  console.log("DATA :", DATA);
  
  const dataRoute = [route.params]

  const handleComment = () => {
    const newItems = {
      id: Date.now(),
      time: Date.now(),
      text:textComment
    }
    const newList = [...route.params.comment, newItems]
    navigation.setParams({
      comment: newList
    })
    setTextComment("")

    setComment(newList)
    // console.log(route);
    // console.log(dataRoute);
    dispatch(changePost(dataRoute))
  }
  const RenderItem = (props) => {
    const { item } = props
    // const deleteCommentB = () => {
    //   const value = DATA.filter(a => a.id !== item.id)

    // console.log("item",item);
    // console.log("value : ",value);
    // dispatch(deleteComment(dataRoute));
    // }

    return (
      <View >
        <View style={{ margin: 10, flexDirection: "row"}}>
          <View style={{ flexDirection: "row" }}>
            <Image source={{ uri: addUserName?.imageURL }} style={{ height: 40, width: 40, borderRadius: 50 }} />
          </View>
          <View style={{ backgroundColor:"#e4e9ef",borderRadius:16,width:"90%" }}>
            <Text style={{ color: "black", margin: 5, fontSize: 16 }}>{addUserName?.name}</Text>
            <Text style={{ color: "black", margin: 5, fontSize: 14 }}>{item.text}</Text>
          </View>
        </View>

      </View>
    )
  }
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }} >
          <Icon name={"arrow-left"} size={26} color="black" />
        </TouchableOpacity>
        {/* <Icon name={"thumbs-up"} size={28}/> */}
      </View>
      <View style={{ borderWidth: 1, margin: 10, flexDirection: "row" }}>
        <TextInput style={{ width: "90%" }} placeholder="Comment" onChangeText={setTextComment}  value={textComment}/>
        <TouchableOpacity onPress={handleComment}>
          <Image source={icon.send} style={{ height: 50, width: 30 }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
      />

    </View>
  )
}