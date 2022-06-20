import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Button,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginButton, AccessToken, Profile, Settings, LoginManager } from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { img } from "../../asset"
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUSer } from '../action/user';
import Google from '../Home/Google';
GoogleSignin.configure({
  webClientId:
    '523744039059-p5i2loh7uvttovmckpos22f0fc5r63nl.apps.googleusercontent.com',
});
// Settings.setAppID('APP ID');




const Login = () => {
  // const [user,setUser]=useState('')
  // const [info,setInfo]=useState(null)
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.user.user)



  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // console.log(idToken)
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userSingIn = auth().signInWithCredential(googleCredential);
    userSingIn.then(async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("@UserName", jsonValue)
        navigation.navigate("Google")
      } catch (error) {
        console.log(error);
      }
    })
  };
  const LoginFb = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(async (result) => {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log("Login success with permissions:");
        await Profile.getCurrentProfile().then(async (data) => {
          const action = addNewUSer(data)
          dispatch(action)
          navigation.navigate("Google")
        }
        )
      }
    }, function (error) {
      console.log(error);
    }
    )
  };
  return (
    <View>
      {/* {dataUser != null
        ? */}
        <ImageBackground source={img.imgLogin2} style={{ justifyContent: "center" }}>
          <View style={styles.taiKhoan}>
            <Image source={img.user} style={{ height: 30, width: 30 }} />
            <TextInput placeholder='UserName' />
          </View>
          <View style={styles.matKhau}>
            <Image source={img.lock} style={{ height: 30, width: 30 }} />

            <TextInput placeholder='PassWord' />
          </View>
          <View>
            <TouchableOpacity onPress={onGoogleButtonPress} style={styles.LoginGG}>
              <Image source={img.imageGoogle} style={{ height: 30, width: "100%" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={LoginFb} style={styles.LoginFb}>
              <Image source={img.imageFacebook} style={{ height: 30, width: "100%" }} resizeMode='cover' />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* :
       <Google/>
      } */}
    </View>
  );
}
const styles = StyleSheet.create({

  LoginGG: {
    height: 30,
    marginHorizontal: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  taiKhoan: {
    borderWidth: 2.5,
    borderColor: "white",
    backgroundColor: "white",
    marginHorizontal: 70,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  matKhau: {
    borderWidth: 2.5,
    borderColor: "white",
    backgroundColor: "white",
    marginHorizontal: 70,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  LoginFb: {
    height: 30,
    marginHorizontal: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  }
});
export default Login