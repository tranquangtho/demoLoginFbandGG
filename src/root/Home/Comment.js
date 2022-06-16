import { View, Text, Touchable, TouchableOpacity, Image,TextInput, FlatList } from 'react-native'
import React from 'react'
import { img,icon } from '../../asset'
import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addComment } from '../action/Post'
import { deleteComment } from '../action/Post'
export default function Comment({navigation},props) {
    const dispatch=useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const addPost = useSelector(state => state.add.post)
  const addUserName = useSelector(state => state.user.user)
    const [textComment,setTextComment]=useState("")
    const onChangeText=(value=>setTextComment(value))

  const handleComment=()=>{
    const newItem ={
      id:Date.now(),
      time:Date.now(),
      textComment
    }
    const newList=[...addPost,newItem]
    dispatch(addComment(newList))
    setModalVisible(!modalVisible)
  }

 
  const RenderItem=(props,{item})=>{
        // console.log(addPost[0].comment);
        const {addPost}=props
        console.log(item);
      const deleteCommentB=()=>{
      const removePhotoId = addPost[0].id;
       const value= addPost.filter(a=>a.id !==removePhotoId)
      const action = deleteComment(value);
      dispatch(action);
      console.log(addPost);
      }
   
    return (
      <View style={{borderWidth:2,margin:10,borderRadius:10}}>
        <View style={{margin:10,flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Image source={{uri:addUserName?.imageURL}} style={{height:36,width:36,borderRadius:50}}/>
          <Text style={{color:"black",margin:5,fontSize:16}}>{addUserName?.name}</Text>
          </View>
          <TouchableOpacity onPress={deleteCommentB}>
          <Image source={icon.cancel} style={{height:20,width:20,marginTop:5}}/>
          </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
        <Text style={{color:"black",margin:5,fontSize:14}}>{textComment}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{height:"100%",width:"100%"}}>
      <View style={{borderWidth:0.5,marginTop:5}}></View>

      <View style={{alignItems:"center",justifyContent:"center",margin:5}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Google")}>
        <Image source={icon.cancel} style={{height:20,width:20}}/>
        <Text>Thoát</Text>
      </TouchableOpacity>
      </View>
      <View style={{borderWidth:0.5}}></View>

      <View style={{borderWidth:1,margin:10,flexDirection:"row"}}>
        
      <TextInput style={{width:"90%"}} placeholder="Comment" onChangeText={onChangeText}  />
        <TouchableOpacity onPress={handleComment}>
        <Image source={icon.send} style={{height:50,width:30}}/>
        </TouchableOpacity>
      </View>
      <FlatList data={addPost}
          keyExtractor={item => item.id}
          renderItem={({item,index})=> <RenderItem addPost={addPost} item={item} index={index}  />}
        />
    </View>
  )
}