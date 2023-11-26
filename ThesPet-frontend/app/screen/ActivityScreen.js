import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {Outfit} from '../config/CustomText'
import colors from '../config/colors'

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.myButton}>
            <Outfit style={styles.text}>Post</Outfit>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton}>
            <Outfit style={styles.text}>Adoption</Outfit>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton}>
            <Outfit style={styles.text}>Forum</Outfit>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    myButton:{
        backgroundColor:colors.secondary,
        width:145,
        height:35,
        borderRadius:20,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        color:colors.white,
        fontSize:20
    }
})