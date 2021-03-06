import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { img, icon } from '../../asset';
import ModalFaceBook from './ModalFaceBook';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changePost } from '../../redux/reducer/PostReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Profile, Settings, LoginManager } from 'react-native-fbsdk-next';
import { userLogin } from '../../redux/reducer/userReducer'
import { currentLogin } from '../../redux/reducer/CurrentLogin';

const Google = (props) => {
  const route = useRoute()
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.user.user)
  const [AnhTai, setAnhTai] = useState()
  const { posts } = useSelector(state => state.post)
  const current =useSelector(state=>state.current)
  // console.log(" current : ",current);
  // console.log("Anh TAI : ",AnhTai);

  useEffect(() => {

    if (route.params && route.params.isLoginOther) {
      setAnhTai(route.params.dataUser)
      // dispatch(currentLogin(AnhTai))
    } else {
      Profile.getCurrentProfile().then(currentProfile => {
        if (dataUser !== undefined) {
          const userFinded = dataUser.find(e => {
            return e.userID === currentProfile.userID
          })
          // AnhTai=userFinded
          setAnhTai(userFinded)

          if (!userFinded) {
            const listUser = [...dataUser, currentProfile]
            dispatch(userLogin(listUser))
          }
        }
        else {
          const listUser = [currentProfile]
          dispatch(userLogin(listUser))
        }
      })
    }


  })

  const ItemPost = ({ item, index, AnhTai }) => {

    const [isLike, setIsLike] = useState(item.isLike)
    // const originalPost = posts.slice();
    // console.log(originalPost);
    // console.log(" userList 2 :", userList);

    const deleteData = () => {
      const removePhotoId = item.id;
      const value = posts.filter(a => a.id !== removePhotoId)
      const action = changePost(value);
      dispatch(action);
    }

    const likeNewPost = () => {
      const originalPost = [...posts]
      const index = originalPost.indexOf(item)
      if (isLike) {
        originalPost.splice(index, 1, ({
          comment: item.comment,
          id: item.id,
          isLike: false,
          text: item.text,
          time: item.time,
          count: 0
        }))
      }
      else {
        originalPost.splice(index, 1, ({
          comment: item.comment,
          id: item.id,
          isLike: true,
          text: item.text,
          time: item.time,
          count: 1
        }))
      }
      setIsLike(!isLike)
      // console.log("originalPost : ",originalPost);
      dispatch(changePost(originalPost))
    }

    return (
      <View style={styles.posts}>
        <View style={styles.info}>
          <View style={styles.avatar}>
            <View>
              <Image source={{ uri: AnhTai?.imageURL }} style={styles.imgAvatar} />
            </View>
            <View style={styles.name}>
              <Text style={styles.content}>{AnhTai?.name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={deleteData} >
            <Image source={icon.cancel} style={styles.cancel} />
          </TouchableOpacity>
        </View>
        <View style={styles.ViewText}>
          <Text style={{ fontSize: 16, color: "black" }}>{item.text}</Text>
        </View>
        <View style={styles.ViewText}>
          <Text>{item.count}</Text>
        </View>
        <View style={styles.bottomItem}>
          {!isLike
            ?
            <TouchableOpacity style={styles.TouchLike} onPress={likeNewPost}  >
              {/* <Icon name={"fa-solid fa-thumbs-up"} style={styles.like} /> */}
              <Icon name={"thumbs-up"} size={30} color="black" />
              <Text style={styles.textLike}>th??ch</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.TouchUnLike} onPress={likeNewPost} >
              <Icon name={"thumbs-up"} size={30} color="blue" />
              <Text style={styles.textUnLike}>B??? Th??ch</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={styles.touchComment} onPress={(e) => navigation.navigate("Comment",AnhTai)}>
            <Icon name={"comment"} size={30} color="black" />
            <Text style={styles.comment}>B??nh lu???n</Text>
          </TouchableOpacity>
          <View style={styles.touchShare}>
            <Icon name={"share-square"} size={26} color="black" />
            <Text style={styles.share}>Chia S???</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <ImageBackground source={img.groundRd} style={styles.imageBackground}>
      <ModalFaceBook addUserName={dataUser} AnhTai={AnhTai} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <ItemPost item={item} index={index} AnhTai={AnhTai} />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ViewText: { margin: 10 },
  touchComment: {
    flexDirection: "row",
    alignItems: "center"
  },
  touchShare: {
    flexDirection: "row",
    alignItems: "center"
  },
  comment: {
    fontSize: 16

  },
  share: {
    fontSize: 16
  },
  textLike: {
    fontSize: 16
  },
  textUnLike: {
    fontSize: 16
  },
  TouchLike: {
    flexDirection: "row",
    alignItems: "center"
  },
  TouchUnLike: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.4,
    padding: 10
  },
  content: {
    fontWeight: 'bold', color: 'black'
  },
  name: {
    justifyContent: 'center'
  },
  avatar: {
    flexDirection: "row"
  },
  imageBackground: {
    backgroundColor: "#bec2b8",
    height: "100%"
  },
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
