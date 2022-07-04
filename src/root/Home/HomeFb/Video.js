import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { img } from '../../../asset'

export default function Video() {
  return (
    <ImageBackground source={img.groundRd} style={styles.imageBackground}>
      <Text>Video</Text>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  imageBackground:{
    flex:1
  }
})