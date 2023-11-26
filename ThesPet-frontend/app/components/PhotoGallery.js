import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import { Outfit } from '../config/CustomText'

export default function PhotoGallery() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.customView}>
            <Outfit style={styles.text}>Photo Gallery</Outfit>
        </View>
        <Image source={require('../../assets/trash.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },  
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:15
    },
    customView:{
        width:'40%',
        backgroundColor:colors.secondary,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
    },
    text:{
        color:colors.white,
        textAlign:'center'
    }
})