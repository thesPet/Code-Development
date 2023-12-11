import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Image,
 TouchableOpacity,
 Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

const StatusBarHeight = Constants.statusBarHeight;
const { width, height } = Dimensions.get('window');

export default function ProfileScreen() {
 return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          style={styles.logo}
          source={require('../../assets/Thespet.png')}
        />
        <TouchableOpacity style={styles.profilePic}>
          <Image
            style={styles.image}
            source={require('../../assets/profile.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Your other content here */}
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
   backgroundColor: colors.primary,
 },
 navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
 },
 logo: {
    width: width / 3,
    height: height / 10,
    resizeMode: 'contain',
 },
 profilePic: {
    marginRight: 16,
 },
 image: {
    width: 45,
    height: 54,
    borderRadius: 20
 },
});