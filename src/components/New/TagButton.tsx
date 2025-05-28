import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TagButtons({toggleTags, isSelectedTag, labelTag, bgColorButtonActive, bgColorButton}){


    return(
        <TouchableOpacity
        onPress={toggleTags}
        >
            <View style={[ 
                styles.buttonTagContainer,
                isSelectedTag ? {backgroundColor: bgColorButtonActive} : {backgroundColor: bgColorButton}
                ]}>

                <Text style={[
                isSelectedTag
                ?
                {color: 'rgb(255, 255, 255)', fontSize: 20}
                :
                {color: bgColorButtonActive, fontSize: 20}
                ]
                }>{labelTag}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    buttonTagContainer:{
        paddingRight: 15,
        paddingLeft: 12,
        paddingTop: 5,
        paddingBottom: 5,
        //backgroundColor: "rgb(229, 229, 234)",
        borderRadius: 10
    },
})