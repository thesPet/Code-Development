import React, { useState } from 'react'
import DropDown from '../components/DropDown'
import { TouchableOpacity, View,StyleSheet,Image,TextInput,ImageBackground } from "react-native";
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingView';
import { Outfit } from '../config/CustomText';
import Constants from 'expo-constants';
import colors from '../config/colors';

const StatusBarHeight = Constants.statusBarHeight;

let data = [{id:1,role:'User'},{id:2,role:'Veterinary'}]

function RegisterPage() {
    const [selectedItem, setSelectedItem]= useState(null)

    const onSelect = (item) =>{
        setSelectedItem(item)
    }

  return (
    <KeyboardAvoidingWrapper>
            <ImageBackground source={require('../../assets/Rectangle.png')} style={styles.background}>
                <View style={styles.InnerContainer}>
                    <Image source={require('../../assets/Thespet.png')} style={styles.pageLogo}/>
                    <Outfit style={styles.TextLogIn}>Register</Outfit>
                    <View style={styles.formArea}>
                        <TextInput
                            label="Email Address"
                            placeholder="andyj@gmail.com"
                            keyboardType="email-address"
                            style={styles.myTextInput}/>
                        <TextInput
                                label="Password"
                                placeholder="Password"
                                keyboardType="email-address"
                                style={styles.myTextInput}/>
                        <TextInput
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                keyboardType="email-address"
                                style={styles.myTextInput}/>
                        <DropDown value={selectedItem} data={data} onSelect={onSelect}/>
                    </View>
                    <TouchableOpacity style={styles.myButtons}>
                        <Outfit style={styles.TextButton}>NEXT</Outfit>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
  )
}

const styles =StyleSheet.create({
    background:{
        flex:1,
        paddingTop: StatusBarHeight + 30,
        backgroundColor: colors.primary,
        paddingBottom:'50%'
    },
    InnerContainer:{
        width: "100%",
        flex: 1,
        alignItems: 'center',
        gap:5,
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
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5,
        height: 60,
        width:'90%',
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
    }
})

export default RegisterPage