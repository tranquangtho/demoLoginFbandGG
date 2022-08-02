// import { View, Text, ImageBackground, StyleSheet } from 'react-native'
// import React from 'react'
// import { img } from '../../../asset'

// export default function Notification() {
//   return (
//     <ImageBackground source={img.groundRd} style={styles.imageBackground} >
//       <Text>notification</Text>
//     </ImageBackground>
//   )
// }
// const styles=StyleSheet.create({
//   imageBackground:{
//     flex:1
//   }
// })
import React, {memo, useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Animated,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notification = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
      .then(data => {
        setListData(data?.data);
      })
      .catch(er => console.error(er));
  }, []);

  const RenderItems = item => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          marginTop: 10,
        }}>
        <Image style={{width: 100, height: 100}} source={{uri: item.url}} />
        <Text>{item.title}</Text>
      </View>
    );
  };

  const animatedHeader = new Animated.Value(0);
  const maxHeight = 180;
  const minHeight = 80;

  const headerHeight = animatedHeader.interpolate({
    inputRange: [0, maxHeight - minHeight],
    outputRange: [maxHeight, minHeight],
    extrapolate: 'clamp',
  });

  const headerOpacity = animatedHeader.interpolate({
    inputRange: [0, 10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerWidth = animatedHeader.interpolate({
    inputRange: [0, 100],
    outputRange: ['100%', '83%'],
    extrapolate: 'clamp',
  });

  StatusBar.setBarStyle('light-content');

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.searchBar, {height: headerHeight}]}>
        <Animated.View style={[styles.viewBetween]}>
          <Animated.Text
            style={{
              fontSize: 22,
              color: 'white',
              fontWeight: '600',
              opacity: headerOpacity, 
            }}>
            FREESHIP
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: 22,
              color: 'white',
              fontWeight: '700',
              opacity: headerOpacity,
            }}>
            TIKI
          </Animated.Text>
          <View style={{width: 80, height: 20}} />
        </Animated.View>
        <Animated.View style={[styles.viewSearch, {width: headerWidth}]}>
          <TouchableOpacity
            style={{ left: 4, top: 2}}>
            <Icon
              name="search"
              color="#E5E5E5"
              size={20}
              style={{margin:5}}
            />
          </TouchableOpacity>
          <TextInput placeholder="Bạn muốn tìm gì ?" style={styles.textInput} />
        </Animated.View>
      </Animated.View>
      <Animated.View style={styles.viewIconBar}>
        <TouchableOpacity style={{marginRight: 10}}>
          <Icon name="bell" color="white" size={20} />
          <Text>12</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" color="white" size={20} />
          <Text>23</Text>
        </TouchableOpacity>
      </Animated.View>
      <View
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: animatedHeader}},
            },
          ],
          {useNativeDriver: false},
        )}>
        <FlatList
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => RenderItems(item)}
          contentContainerStyle={{padding: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    backgroundColor: '#39ffef',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  viewBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    borderRadius: 4,
    paddingLeft: 30,
    paddingVertical: 6,
  },
  viewSearch: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    backgroundColor: 'white',

  },
  viewIconBar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: StatusBar.currentHeight || 48,
    paddingRight: 20,
  },
});

export default memo(Notification);
