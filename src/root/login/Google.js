import { View, Text,Button,Alert,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Value, log } from 'react-native-reanimated';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

 const Google=({navigation}) =>{
   const [info,setInfo]=useState('')
  useEffect(() => {
    getDataG()
}, [info]);


const removeData = async () => {
  try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
  } catch (error) {
      console.log(error);
  }
}



  const getDataG = async()=>{
    try {
      const jsonValue= await AsyncStorage.getItem("@UserName")
      if( jsonValue!==null){
          const value=JSON.parse(jsonValue)
         return setInfo(value.name) || setInfo(value.user.displayName)
      }
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <View >
            <Text >
               hello {info}
            </Text>
            <Button
          title="Sign-Out"
          onPress={removeData}
        />
      </View>
  )
}
const styles = StyleSheet.create({
  
})
export default Google