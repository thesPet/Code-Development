import { StyleSheet, View, Dimensions } from 'react-native'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingView'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import Constants from 'expo-constants';
import ProfileInformation from '../components/ProfileInformation.js'
import PhotoGallery from '../components/PhotoGallery.js';
import colors from '../config/colors.js';

const StatusBarHeight = Constants.statusBarHeight;
const height = Dimensions.get('screen').height;

export default function ProfileOwner() {
  return (
    <View style={styles.container}>
        {/*Headers*/}
        <Header/>
        {/*Profile information for name and about me*/}
        <ProfileInformation />
        {/*PhotoGallery */}
        <PhotoGallery />
        {/*Navigaton Bar*/}
        <NavigationBar/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:colors.primary,
        paddingTop: StatusBarHeight - 10,
    },
})