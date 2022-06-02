import { View, Text, Modal,StyleSheet, Image,Pressable } from 'react-native'
import React, { useState } from 'react'
import { icon,img } from '../../asset';
const ModalComment=(props)=> {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}  style={styles.modal}>
        <View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Image source={img.imgLogin} style={styles.avatar} />
            <Text style={{color: 'black', fontSize: 20}}>{props.name}</Text>
          </View>
          <Pressable style={{backgroundColor: '#f9ffb1'}}>

                <Text>hello</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
       <Image source={icon.comment} style={{height:50,width:50}}/>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    modal:{paddingTop:10},
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
  });
  export default ModalComment