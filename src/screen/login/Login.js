import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Profile, Settings, LoginManager} from 'react-native-fbsdk-next';
import {img} from '../../asset';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../redux/reducer/userReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {currentLogin} from '../../redux/reducer/CurrentLogin';

GoogleSignin.configure({
  webClientId:
    '523744039059-p5i2loh7uvttovmckpos22f0fc5r63nl.apps.googleusercontent.com',
});
Settings.setAppID('379751594200448');

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // userName and passWord
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const userNameLogin = value => setUserName(value);
  const passWordLogin = value => setPassWord(value);
  // lay du lieu tu Store Ve
  const dataUser = useSelector(state => state.user.user);
  const current = useSelector(state => state.current.current);
  //Login voi UserName va passWord
  // console.log('dataUser', dataUser);

  const LoginUser = () => {
    const loginUser = dataUser.find(currentValue => {
      return (
        userName === currentValue.userName && passWord === currentValue.passWord
      );
    });
    if (loginUser) {
      // dispatch(currentLogin(loginUser));
      navigation.navigate('HomeFb',{screen:"Google",params:loginUser});
      setUserName('');
      setPassWord('');
    } else {
      return <Text>Nhap thong tin</Text>;
    }
  };

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
    LoginManager.logInWithPermissions().then(
      result => {
        console.log('result: ', result);
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log('Login success with permissions: ');
          navigation.navigate('HomeFb');
        }
      },
      function (error) {
        console.log(error);
      },
    );
  };
  //GIAO DIEN
  return (
    <ImageBackground
      source={img.backGoundTim}
      style={styles.imageBackground}
      blurRadius={100}>
      <View style={styles.boxF}>
        <View style={styles.boxC}>
          <View style={styles.taiKhoan}>
            <TextInput
              label="UserName"
              mode="flat"
              style={styles.TextInputBoxC}
              onChangeText={userNameLogin}
              value={userName}
              maxLength={16}
              selectionColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              activeOutlineColor="black"
            />
          </View>
          <View style={styles.matKhau}>
            <TextInput
              label="PassWord"
              mode="flat"
              style={styles.TextInputBoxC}
              onChangeText={passWordLogin}
              value={passWord}
              maxLength={16}
              secureTextEntry={true}
              selectionColor="black"
              activeUnderlineColor="black"
              activeOutlineColor="black"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginApp} onPress={LoginUser}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.viewCut}></View>
        <View style={styles.SingIn}>
          <Text style={styles.SingIn}>--- Sign in with --- </Text>
        </View>
        <View style={styles.boxSingIn}>
          <TouchableOpacity onPress={LoginFb}>
            <Icon name={'facebook'} size={30} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 2}}
            onPress={onGoogleButtonPress}>
            <Image source={img.GoogleIcon} style={styles.ImageGoogleIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'center',
    flex: 1,
  },
  boxF: {
    backgroundColor: 'white',
    marginHorizontal: 40,
    borderRadius: 5,
  },
  boxC: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  TextInputBoxC: {
    // marginLeft: 10,
    width: '100%',
  },
  register: {
    alignItems: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
  },
  textRegister: {
    color: '#00e7e2',
    fontWeight: 'bold',
  },
  textLogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewCut: {
    borderWidth: 0.2,
    marginHorizontal: 20,
  },
  SingIn: {
    alignItems: 'center',
    margin: 5,
  },
  textSingIn: {
    color: '#5d8c8b',
    fontSize: 18,
  },
  boxSingIn: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  ImageGoogleIcon: {
    height: 28,
    width: 28,
  },
  loginApp: {
    alignItems: 'center',
    backgroundColor: '#00e7e2',
    height: 30,
    marginHorizontal: 22,
    borderRadius: 10,
    borderWidth: 0.01,
    justifyContent: 'center',
    marginBottom: 20,
  },

  taiKhoan: {
    // borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  matKhau: {
    // borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
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
export default Login;
