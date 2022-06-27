import { View, Text, Touchable, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import { img, icon } from '../../asset'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
export default function Comment({ navigation }) {
  const dispatch = useDispatch()
  const route = useRoute()
  const [modalVisible, setModalVisible] = useState(false);
  const [textComment, setTextComment] = useState("")

  const onChangeText = (value => setTextComment(value))

  const { posts } = useSelector(state => state.post)

  const addUserName = useSelector(state => state.user.user)
  // console.log(route);
  const [comment,setComment]=useState("")
  const handleComment = () => {
    const newItems = {
      id: Date.now(),
      time: Date.now(),
      textComment
    }
    let newList = [...comment, newItems]
    navigation.setParams({
      comment: newList
    })
    setComment(newList)
  }
  const RenderItem = (props) => {
    const { item } = props
    // console.log("item",item);
    // const deleteCommentB = () => {
    //     const params= route.params.comment
    //   const removePhotoId = item.id;
    //   const value = params.filter(a => a.id !== removePhotoId)
    // const action = deleteComment(value);
    // dispatch(action);


    return (
      <View style={{ borderWidth: 2, margin: 10, borderRadius: 10 }}>
        <View style={{ margin: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={{ uri: addUserName?.imageURL }} style={{ height: 36, width: 36, borderRadius: 50 }} />
            <Text style={{ color: "black", margin: 5, fontSize: 16 }}>{addUserName?.name}</Text>
          </View>
          {/* <TouchableOpacity >
            <Image source={icon.cancel} style={{ height: 20, width: 20, marginTop: 5 }} />
          </TouchableOpacity> */}
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ color: "black", margin: 5, fontSize: 14 }}>{textComment}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={{ borderWidth: 0.5, marginTop: 5 }}></View>

      <View style={{ alignItems: "center", justifyContent: "center", margin: 5 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icon.cancel} style={{ height: 20, width: 20 }} />
          <Text>Thoát</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 0.5 }}></View>


      <View style={{ borderWidth: 1, margin: 10, flexDirection: "row" }}>

        <TextInput style={{ width: "90%" }} placeholder="Comment" onChangeText={onChangeText()} value={textComment} />
        <TouchableOpacity onPress={handleComment}>
          <Image source={icon.send} style={{ height: 50, width: 30 }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={comment}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <RenderItem posts={posts} item={item} index={index} />}
      />

    </View>
  )
}