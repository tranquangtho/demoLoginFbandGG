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
import { userLogin } from '../reducer/itemReducer'
import { current } from 'immer';
import Icon from 'react-native-vector-icons/FontAwesome5';

GoogleSignin.configure({
  webClientId:
    '523744039059-p5i2loh7uvttovmckpos22f0fc5r63nl.apps.googleusercontent.com',
});
Settings.setAppID('379751594200448');




const Login = () => {
  // const [user,setUser]=useState('')
  // const [info,setInfo]=useState(null)
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.user.user)
  const [userName,setUserName]=useState()
  const [passWord,setPassWord]=useState()
  const userNameLogin = value =>setUserName(value)
  const passWordLogin = value =>setPassWord(value)
  const dataRegister= useSelector(state=>state.register.user)
  console.log(dataUser);
//Login User
  const LoginUser=()=>{
    if(userName == dataUser.userName && passWord == dataUser.passWord){
      navigation.navigate("HomeFb")
    }
    else{
      console.log("sai mật khẩu");
    }
  }
  //Login Google
  const onGoogleButtonPress = async () => {
    // // Get the users ID token
    // const { idToken } = await GoogleSignin.signIn();
    // // console.log(idToken)
    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // // Sign-in the user with the credential
    // const userSingIn = auth().signInWithCredential(googleCredential);
    // userSingIn.then(async (value) => {
    //   try {
    //     const jsonValue = JSON.stringify(value)
    //     await AsyncStorage.setItem("@UserName", jsonValue)
    //     navigation.navigate("Google")
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })
  };
  //Login Facebook
  const LoginFb = () => {
    LoginManager.logInWithPermissions().then((result) => {
      console.log(result);
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log("Login success with permissions: ")
        Profile.getCurrentProfile().then(
          function (currentProfile) {
            if (currentProfile) {
              dispatch(userLogin(currentProfile))
              navigation.navigate("HomeFb", currentProfile)
              console.log("Login success with permissions:",currentProfile);
            }
          }
        )
      }
    }, function (error) {
      console.log(error);
    }
    )
  };
  return (
    <ImageBackground source={img.login} style={{ justifyContent: "center", flex: 1 }}>
      <View style={{ backgroundColor: "white", marginHorizontal: 40, borderRadius: 5 }}>
        <View style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 10 }}>
          <View style={styles.taiKhoan}>
            <TextInput placeholder='UserName' style={{ marginLeft: 10,width:"100%" }} onChangeText={userNameLogin}  value={userName} maxLength={16}/>
          </View>
          <View style={styles.matKhau}>
            <TextInput placeholder='PassWord' style={{ marginLeft: 10,width:"100%" }} onChangeText={passWordLogin} value={passWord} maxLength={16} />
          </View>
        </View>
        <TouchableOpacity style={{ alignItems: "flex-end", marginRight: 20, marginBottom: 10 }} onPress={()=>navigation.navigate("Register")}>
          <Text style={{ color: "#00e7e2", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginApp} onPress={LoginUser}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 0.2, marginHorizontal: 20 }}></View>
        <View style={{alignItems:"center",margin:5}}>
          <Text style={{color:"#5d8c8b",fontSize:18}}>--- Sign in with --- </Text>
        </View>
        <View style={{ flexDirection: "row",margin:10,justifyContent:"space-around" }}>
          <TouchableOpacity onPress={LoginFb} >
            <Icon name={"facebook"} size={30} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:2}} onPress={onGoogleButtonPress}>
            <Image source={img.GoogleIcon} style={{ height: 28, width: 28 }} />
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  loginApp: {
    alignItems: "center",
    backgroundColor: "#00e7e2",
    height: 30,
    marginHorizontal: 22,
    borderRadius: 10,
    borderWidth: 0.01,
    justifyContent: "center",
    marginBottom: 20,
  },

  taiKhoan: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  matKhau: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  LoginFb: {
    // height: 30,
    // marginHorizontal: 150,
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  LoginGG: {
    // height: 30,
    // marginHorizontal: 150,
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    // marginBottom: 10
  },
});
export default Login