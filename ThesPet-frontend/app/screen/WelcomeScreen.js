import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import { Outfit } from '../config/CustomText'

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/Rectangle.png')}>
        <Image style={styles.image} source={require('../../assets/Thespet.png')}/>
        <TouchableOpacity style={styles.custombutton}>
            <Outfit style={styles.text}>Continue</Outfit>
        </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary
    },
    image:{
        width:400,
        height:300
    },
    custombutton:{
        position:'absolute',
        bottom:100,
        backgroundColor:colors.secondary,
        width:169,
        height:43,
        borderRadius:20,
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        color:colors.white,
        fontSize:20
    }
})