import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { img } from '../../asset'

export default function Profile() {
  return (
    <View>
      <ImageBackground source={img.backgroundHomeFacebook} style={{height:"70%"}}>
        <View>
            <Text>hello</Text>
        </View>
      </ImageBackground>
    </View>
  )
}