import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {icon} from '../../asset';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Comment({navigation}) {
  const dispatch = useDispatch();
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [textComment, setTextComment] = useState('');
  const onChangeText = value => setTextComment(value);
  const {posts} = useSelector(state => state.post);
  const addUserName = useSelector(state => state.user.user);
  const currentUser = useSelector(state => state.current.current);

  const DATA = route.params;

  // console.log("DATA :", DATA);

  // const dataRoute = [route.params]
  

  const handleComment = () => {
    const newItems = {
      // id: Date.now(),
      time: Date.now(),
      text: textComment,
    };
    const newList = [...DATA, newItems];
    navigation.setParams({
      comment: newList,
    });
    setTextComment('');
  };
  const RenderItem = props => {
    const {item} = props;
    return (
      <View>
        <View style={styles.listCommentLayout}>
          <View style={styles.listCommentBoxRight}>
            <Image
              source={{uri: currentUser?.imageURL}}
              style={styles.listCommentAvatar}
            />
          </View>
          <View style={styles.listCommentBoxLeft}>
            <Text style={styles.listCommentName}>{currentUser?.name}</Text>
            <Text style={styles.listCommentText}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatListBottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Google')}
          style={styles.iconArrowLeft}>
          <Icon name={'arrow-left'} size={26} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Comment"
          onChangeText={onChangeText}
          value={textComment}
        />
        {textComment ? (
          <TouchableOpacity onPress={handleComment}>
            <Image source={icon.send} style={styles.iconSend} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity >
            <Image source={icon.send} style={styles.iconSend} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  flatListBottom: {
    marginBottom: 10,
  },
  iconArrowLeft: {
    marginLeft: 10,
  },
  boxTextInput: {
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
  },
  textInput: {
    width: '90%',
  },
  iconSend: {
    height: 50,
    width: 30,
  },
  listCommentAvatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  listCommentName: {
    color: 'black',
    margin: 5,
    fontSize: 16,
  },
  listCommentText: {
    color: 'black',
    margin: 5,
    fontSize: 14,
  },
  listCommentBoxLeft: {
    backgroundColor: '#e4e9ef',
    borderRadius: 16,
    width: '90%',
  },
  listCommentBoxRight: {
    flexDirection: 'row',
  },
  listCommentLayout: {
    margin: 10,
    flexDirection: 'row',
  },
});
