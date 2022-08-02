import {
  View,
  Text,
  ImageBackground,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function AddFriend() {
  const dispatch = useDispatch();
  const friend = useSelector(state => state.friend.addFriend);
  const AddFriend = ({item}) => {
    return (
      <View style={styles.layoutBig}>
        <View style={styles.layoutChild}>
          <View style={styles.boxRight}>
            <Image source={{uri: item.imageURL}} style={styles.avatarFriend} />
            <Text style={styles.nameFriend}>{item.name}</Text>
          </View>
          <View style={styles.BoxLeft}>
            <TouchableOpacity style={styles.requireAccept}>
              <Text style={styles.textAccept}>Chấp Nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.requireRefuse}>
              <Text style={styles.textRefuse}>Xoá Yêu Cầu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={friend}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <AddFriend item={item} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutBig: {
    height: 70,
    width: '90%',
    margin: 5,
    borderTopWidth: 0.6,
  },
  layoutChild: {
    margin: 5,
    flexDirection: 'row',
  },
  boxRight: {
    flexDirection: 'row',
  },
  avatarFriend: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  nameFriend: {
    color: 'black',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 17,
  },
  BoxLeft: {
    marginLeft: 40,
    justifyContent: 'center',
    height: 60,
    width: 100,
  },
  requireAccept: {
    borderWidth: 0.8,
    alignItems: 'center',
    margin: 2,
    backgroundColor: '#4c93ff',
  },
  requireRefuse: {
    borderWidth: 0.8,
    alignItems: 'center',
    margin: 2,
  },
  textAccept: {
    color: 'white',
    fontSize: 15,
  },
  textRefuse: {
    color: '#181819',
    fontSize: 15,
  },
});
