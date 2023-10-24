import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import colors from '../config/colors.js'
import { Figtree, Outfit } from '../config/CustomText.js';
import Constants from 'expo-constants';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingView.js';

const StatusBarHeight = Constants.statusBarHeight;

function LoginPage(props) {
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground source={require('../../assets/Rectangle.png')} style={styles.background}>
                <View style={styles.InnerContainer}>
                    <Image source={require('../../assets/Thespet.png')} style={styles.pageLogo}/>
                    <Outfit style={styles.TextLogIn}>Log in</Outfit>
                    <View style={styles.formArea}>
                        <TextInput
                            label="Email Address"
                            placeholder="andyj@gmail.com"
                            keyboardType="email-address"
                            style={styles.myTextInput}/>
                            <TextInput
                                label="Password"
                                placeholder="***********"
                                keyboardType="email-address"
                                style={styles.myTextInput}/>
                    </View>
                    <TouchableOpacity style={styles.myButtons}>
                        <Outfit style={styles.TextButton}>LOG IN</Outfit>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.myButtons}>
                        <Outfit style={styles.TextButton}>REGISTER</Outfit>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.differentButton}>
                        <Outfit style={styles.TextForgot}>Forgot your Password?</Outfit>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        paddingTop: StatusBarHeight + 30,
        backgroundColor: colors.primary,
    },
    InnerContainer:{
        width: "100%",
        flex: 1,
        alignItems: 'center',
    },
    pageLogo:{
        width:150,
        height: 100
    },
    formArea:{
        width:'90%',
    },
    myTextInput:{
        backgroundColor: colors.white,
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 5,
        fontSize: 16,
        height: 60,
        marginVertical: 3,
        marginBottom: 10,
        color: colors.black
    },
    myButtons:{
        padding: 15,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5,
        height: 60,
        width:'90%'
    },
    differentButton:{
        alignItems:'center',
    },
    TextLogIn:{
        width:'90%',
        color:colors.secondary,
        fontSize:25,
        textAlign:'left',
    },
    TextButton:{
        color:colors.white,
        fontSize:25
    },
    TextForgot:{
        color:colors.black,
        fontSize:20
    }
})

export default LoginPage;