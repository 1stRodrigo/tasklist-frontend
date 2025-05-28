import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

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
        backgroundColor: "rgb(242, 242, 247)",
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
        backgroundColor: "rgb(242, 242, 247)",
        borderRadius: 18
    },
    filterText:{
        fontSize: 20,

        color: "rgb(142, 142, 147)", //inactive
        padding: 9,
    },
    filterTextActive:{
        fontSize: 20,
        color: "rgb(0, 122, 255)", //active
        padding: 9,
    }
})