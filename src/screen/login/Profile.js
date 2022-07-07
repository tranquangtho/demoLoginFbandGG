import { View, Text, ImageBackground, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import IconMater from 'react-native-vector-icons/MaterialIcons';



export default function Profile() {
  const avatar = useSelector(state => state.user.user)
  return (
    <View>

      <ImageBackground source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.YeVkVtkCudflYHfWu5bC6wHaEo&pid=Api&P=0&w=280&h=175" }} style={styles.ImageBackground}>
        <View style={styles.boxIcon}>
          <TouchableOpacity>
            <IconMater name={"menu"} size={30} color="white" style={styles.iconMaster} />
          </TouchableOpacity>
          <Text style={styles.textProfile}>Profile</Text>
        </View>
      </ImageBackground>
      <View style={styles.boxAvatar}>
        <Image source={{ uri: avatar.imageURL }} style={styles.avatar} />
        <Text style={styles.name}>{avatar.name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  ImageBackground: {
    height: 260
  },
  boxIcon: {
    flexDirection: "row"
  },
  iconMaster: {
    marginLeft: 10
  },
  textProfile: {
    color: "white",
    fontSize: 20,
    marginLeft: 20
  },
  boxAvatar: {
    alignItems: "center",
    position: "absolute",
    marginTop: 150,
    marginHorizontal: 120
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 100
  },
  name: {
    color: "black",
    fontSize: 20,
    marginTop: 10
  },
})