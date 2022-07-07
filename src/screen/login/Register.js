import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { img } from '../../asset'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { registerUser } from '../../redux/reducer/RegisterReducer';
export default function Register({ navigation }) {
    const dispatch = useDispatch()
    const [userNameRegister, setUserNameRegister] = useState()
    const [passWordRegister, setPassWordRegister] = useState()
    const registerUserName = value => setUserNameRegister(value)
    const registerPassWord = value => setPassWordRegister(value)
    const [listData,setListData]=useState()
    const register = () => {
      const  dataUser = {
            userName: userNameRegister,
            passWord: passWordRegister,
            imageURL:"https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
        }
        console.log("dataUser",dataUser);
        setUserNameRegister("")
        setPassWordRegister("")
        setListData(dataUser)
        // const ListData=[...listData]
        // console.log(listDataUser);
        dispatch(registerUser(dataUser))
    }
    return (
        <ImageBackground source={img.login} style={{ flex: 1, justifyContent: "center" }}>

            <View style={styles.layout}>
                <View style={styles.form}>
                    <View style={styles.username}>
                        <TextInput placeholder='UserName' style={{ marginLeft: 5 }} onChangeText={registerUserName} value={userNameRegister} maxLength={16} />
                    </View>
                    <View style={styles.passWord}>
                        <TextInput placeholder='PassWord' style={{ marginLeft: 5 }} onChangeText={registerPassWord} value={passWordRegister} maxLength={16} />
                    </View>
                </View>
                {userNameRegister && passWordRegister
                    ?
                    <TouchableOpacity style={styles.register} onPress={register}>
                        <Text style={{ fontSize: 20, color: "white" }}>Register</Text>
                    </TouchableOpacity>
                    :
                    <View style={styles.input}>
                        <Text style={styles.warring}>please input information</Text>
                    </View>
                }
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.icon}>
                    <Icon name={"arrow-left"} size={30} color={"black"} />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    warring:{
        fontSize:20,
        color:"#5d8c8b"
    },
    input: {
        alignItems:"center"
    },
    icon: {
        marginTop: 10,
        alignItems: "center"
    },
    layout: {
        marginHorizontal: 60,
        backgroundColor: "white",
        borderRadius: 5,
    },
    form: {
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 10
    },
    username: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },
    passWord: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,


    },
    EnterPassWord: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },
    register: {
        alignItems: "center",
        borderWidth: 0.01,
        marginHorizontal: 90,
        borderRadius: 5,
        backgroundColor: "#00e7e2",
        marginBottom: 10
    },
})