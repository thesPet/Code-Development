import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Outfit, Figtree } from '../config/CustomText'
import colors from '../config/colors'
import Achievements from './Achievements'

const height = Dimensions.get("window").height;

export default function ProfileInformation(){
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <View style={styles.picandname}>
                    {/*One Fetcher for Profile Pic and name and maybe about me*/}
                    <Image source={require('../../assets/profile.png')} />
                    <Outfit style={styles.text}>Dummy Name</Outfit>
                </View>
                <View style={styles.aboutmecontainer}>
                    <Outfit style={styles.text}>About Me:</Outfit>
                    <View style={styles.aboutme}>
                        <Figtree style={styles.text}>Lorem Ipsum and shit</Figtree>
                    </View>
                </View>
            </View>
            <Achievements />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        gap:40
    },
    contentWrapper:{
        flexDirection:'row',
        height: 150,
    },
    picandname:{
        marginLeft:10,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    aboutmecontainer:{
        width:'100%',
        paddingLeft:15,
        paddingRight:110,
    },
    aboutme:{
        backgroundColor:colors.white,
        height:'100%',
        padding:5,
        borderRadius:15
    },
    text:{
        color:colors.black
    }
})