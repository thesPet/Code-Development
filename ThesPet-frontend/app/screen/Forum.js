import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import colors from '../config/colors'
import { Outfit, Figtree } from '../config/CustomText'

export default function Forum() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        <View style={styles.profileheader}>
            <Image source={require('../../assets/profile.png')} style={styles.profile}/>
            <Outfit style={styles.text}>Name Something</Outfit>
        </View>
        <View style={styles.textContainer}>
            <Outfit style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod vestibulum velit at tristique.
                Suspendisse interdum massa at neque viverra, ac molestie turpis semper. Nunc fringilla lorem vitae lorem pretium, 
                nec scelerisque turpis commodo. Nam facilisis, enim quis blandit varius, nisi dui ullamcorper turpis, ut convallis orci 
                enim in risus. Aliquam erat volutpat. Morbi egestas neque bibendum ipsum molestie facilisis. Pellentesque et mauris nec odio 
                varius ullamcorper. Suspendisse nisi neque, consequat sit amet tristique eu, molestie nec lectus.
                Etiam suscipit consectetur dui quis vulputate. Mauris non porttitor dolor. Ut pretium purus a posuere tincidunt. 
                Donec dapibus quam et ante congue, vitae mollis eros varius. Ut at malesuada dui. Fusce blandit scelerisque erat 
                vel ullamcorper. Nulla rutrum tempus mauris id tempor. Aenean fringilla, nisi ut sagittis euismod, tortor libero 
                vestibulum lacus, nec posuere quam eros id tortor.
            </Outfit>
        </View>
        <TouchableOpacity style={styles.like}>
            <Image source={require('../../assets/heart.png')}/>
        </TouchableOpacity>
      </View>
      <NavigationBar />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary,
    },
    profile:{
        width: 45,
        height: 54,
        borderRadius: 20
    },
    wrapper:{
        gap:15,
        borderTopColor:colors.secondary,
        borderBottomColor:colors.secondary,
        borderStyle:'solid',
        borderBottomWidth:1,
    },
    profileheader:{
        flexDirection:'row',
        alignItems:'center',
        left:20,
        top:12,
        gap:5
    },
    text:{
        color:colors.black,
        textAlign:'justify'
    },
    textContainer:{
        backgroundColor:colors.white,
        width:'100%',
        padding:5
    },
    like:{
        paddingLeft:15,
        width:'10%',
        justifyContent:'center',
        paddingBottom: 10
    }
})