import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { img } from '../../../asset'

export default function Video() {
  return (
    <ImageBackground source={img.groundRd} style={{flex:1}}>
      <Text>Video</Text>
    </ImageBackground>
  )
}