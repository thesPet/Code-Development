import React, { useState } from "react";
import { TouchableOpacity, View,StyleSheet, Image } from "react-native";
import { Outfit } from "../config/CustomText";
import colors from "../config/colors";

const DropDown = ({data =[], value = {}, onSelect = () => {} }) => {
    const [showOptions, setShowOptions] = useState(false);

    const onSelectedItem = (val) =>{
        setShowOptions(false)
        onSelect(val)
    }

    return(
        <View>
            <TouchableOpacity style={styles.dropDownStyle} activeOpacity={0.8} onPress={() => setShowOptions(!showOptions)}>
                <Outfit style={styles.textStyle}>{!!value? value?.role : 'Choose Role'}</Outfit>
                <Image style={{transform:[{rotate:showOptions? '180deg' : '0deg'}]}} source={require('../../assets/dropdownarrow.png')} />
            </TouchableOpacity>
            {showOptions && (<View style={styles.optionsContainer}>
                {data.map((val,i)=>{
                    return(
                        <TouchableOpacity onPress={() => onSelectedItem(val)} style={styles.optionsCell} activeOpacity={0.8}>
                            <Outfit key={String(i)} style={styles.options}>{val.role}</Outfit>
                        </TouchableOpacity>
                    )
                })}
            </View>)}
        </View>
    )
};

const styles = StyleSheet.create({
    dropDownStyle:{
        height: 60,
        backgroundColor:colors.white,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
    },
    textStyle:{
        color: colors.black,
        fontSize: 16,
        flex:1,
        textAlign:'center'
    },
    optionsContainer:{
        width:'100%',
        position:'absolute',
        top:'100%',
        zIndex:1,
    },
    optionsCell:{
        backgroundColor:colors.white,
        height:60,
        justifyContent:'center',
    },
    options:{
        width:'88%',
        textAlign:'center',
        fontSize:16
    }
});

export default DropDown;