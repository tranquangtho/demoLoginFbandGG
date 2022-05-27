import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Button,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginButton, AccessToken, Profile,Settings,LoginManager} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { log, Value, set } from 'react-native-reanimated';
import Google from './Google';
import  {img} from "../../asset"
GoogleSignin.configure({
  webClientId:
    '523744039059-p5i2loh7uvttovmckpos22f0fc5r63nl.apps.googleusercontent.com',
});
// Settings.setAppID('APP ID');
export default function Login({navigation}) {
  const [user,setUser]=useState('')
  const [info,setInfo]=useState(null)


useEffect(()=>{
  if(info){
    LoginFb(info)
  }
},[info])

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // console.log(idToken)
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const userSingIn = auth().signInWithCredential(googleCredential);
    userSingIn.then(async(value)=>{
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("@UserName",jsonValue)
        navigation.navigate("Google")
      } catch (error) {
          console.log(error);
      }
    })
  };  
  const LoginFb=  ()=> {
    LoginManager.logInWithPermissions(["public_profile"]).then(async(result)=> {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log("Login success with permissions:");
         await Profile.getCurrentProfile().then(async(data)=>{
            const value=JSON.stringify(data)
            await AsyncStorage.setItem("@UserName",value)
             navigation.navigate("Google")
        }
        )

        }
        },function (error) {
          console.log(error);
        }
    )
  };
  return (
    <ImageBackground source={img.imgLogin}  style={{flex:1,justifyContent:"center"}}>
    <View style={styles.taikhoan}>
          <TextInput placeholder='UserName' />
    </View>
    <View style={styles.matkhau}>
          <TextInput placeholder='PassWord' />
    </View>
    <View>
    
    <TouchableOpacity onPress={onGoogleButtonPress} style={styles.LoginGG}>
        <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={LoginFb} style={styles.LoginFb}>
        <Text>facebook</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
 
  LoginGG:{
    height:30,
    marginHorizontal:150,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  },
  taikhoan: {
    borderWidth: 2.5,
    borderColor:"white",
    backgroundColor:"white",
    marginHorizontal:70,
    marginBottom:10,
    borderRadius:8
  },
  matkhau: {
    borderWidth: 2.5,
    borderColor:"white",
    backgroundColor:"white",
    marginHorizontal:70,
    borderRadius:8,
    marginBottom:10,
  },
  LoginFb:{
    height:30,
    marginHorizontal:150,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  }
});
