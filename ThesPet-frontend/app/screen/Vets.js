import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import {Outfit} from '../config/CustomText'
import colors from '../config/colors'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import Achievements from '../components/Achievements'

export default function Vets() {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.infoWrap}>
            <View style={styles.wrapper}>
                <Image style={styles.picture} source={require('../../assets/profile.png')} />
                <View style={styles.informations}>
                    <Outfit>Basic Information</Outfit>
                    <View style={styles.name}>
                        <Outfit>Name: </Outfit>
                        <View style={styles.stringCon}>
                            <Outfit>Dummy Name</Outfit>
                        </View>
                    </View>
                    <View style={styles.location}>
                        <Outfit>Location: </Outfit>
                        <View style={styles.stringCon}>
                            <Outfit>Dummy Location</Outfit>
                        </View>
                    </View>
                </View>
            </View>
            <Achievements />
            <TouchableOpacity style={styles.myButton}>
                <Outfit style={styles.text}>CONTACT VET</Outfit>
            </TouchableOpacity>
        </View>
        <NavigationBar />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
    },
    infoWrap:{
        backgroundColor:colors.primary,
        flex:1,
        flexDirection:'column',
        borderTopColor:colors.secondary,
        borderBottomColor:colors.secondary,
        borderStyle:'solid',
        gap:12
    },
    wrapper:{
        flexDirection:'row',
        width:"100%",
        alignItems:'center',
        justifyContent:'space-around',
    },
    picture:{
        width:70,
        height:70
    },
    informations:{
        flexDirection:"column",
        width:'75%',
        gap:12
    },
    stringCon:{
        backgroundColor:colors.white,
        width:"70%",
        borderRadius:12,
        paddingLeft:15
    },
    name:{
        flexDirection:'row'
    },
    location:{
        flexDirection:'row'
    },
    myButton:{
        backgroundColor:colors.secondary,
        width:178,
        height:36,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    text:{
        color:colors.white,
        fontSize:15
    }
})