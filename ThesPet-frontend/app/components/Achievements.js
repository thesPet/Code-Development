import { View, StyleSheet } from 'react-native'
import { Outfit, Figtree } from '../config/CustomText'
import colors from '../config/colors'

export default function Achievements() {
  return (
    <View>
        <View style={styles.container}>
        <View style={styles.achievments}>
            <Outfit style={styles.text}>Rating</Outfit>
            <View style={styles.circle}>
                <Figtree>0</Figtree>
            </View>
        </View>
        <View>
            <Outfit style={styles.text}>Issues</Outfit>
            <View style={styles.circle}>
                <Figtree>0</Figtree>
            </View>
        </View>
        <View>
            <Outfit style={styles.text}>Availability</Outfit>
            <View style={styles.circle}>
                <Figtree>0</Figtree>
            </View>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    circle:{
        backgroundColor:colors.white,
        height:50,
        width:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontWeight: 'bold',
        color:colors.black
    }
})