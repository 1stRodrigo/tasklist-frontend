import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontSizes, FontWeights, Spacing, BorderRadius } from "../../styles/Typography/typography";
import { Colors } from "../../styles/Colors";


export default function PriorityButtons({ togglePriority, isSelectedPriority, labelPriority }){


    return(
        <TouchableOpacity 
            style={styles.buttonFilter}
            onPress={togglePriority}
            >
            <Text style={[styles.filterText, isSelectedPriority ? styles.filterTextActive : styles.filterText]}>
                {labelPriority}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    textInputLabel:{
        fontSize: 19,
        fontWeight: 400,
    },
    priorityContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 18,
        //backgroundColor: "rgb(242, 242, 247)",
        marginTop: 8,
        marginBottom: 28,
        paddingRight: 7,
        paddingLeft: 7,
        paddingTop: 5,
        paddingBottom: 5
        
    },
    buttonFilter: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.m
    },
    filterText:{
        fontSize: FontSizes.button,
        color: Colors.mediumGray, //inactive
        padding: 9,
    },
    filterTextActive:{
        fontSize: 20,
        color: Colors.mediumGray, //active
        padding: 9,
    }
})