import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import colors from '../config/colors';

const { width, height } = Dimensions.get('window');

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.thespetButton}>
        <Image source={require('../../assets/Vector.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.thespetButton}>
        <Image source={require('../../assets/icon_pet.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.thespetButton}>
        <Image source={require('../../assets/icon_add.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.thespetButton}>
        <Image source={require('../../assets/icon_heart.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.thespetButton}>
        <Image source={require('../../assets/icon_people.png')}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      position:'absolute',
      left:0,
      bottom:0,
      right:0,
      flexDirection:'row',
      alignItems:'center',
    },
    thespetButton:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})