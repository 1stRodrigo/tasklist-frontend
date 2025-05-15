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
        backgroundColor: "#E2E8F0",
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
        backgroundColor: "#E2E8F0"
    },
    filterText:{
        fontSize: 22,
        fontWeight: 600,
        color: "#2D3748", //inactive
        padding: 9,
    },
    filterTextActive:{
        fontSize: 22,
        fontWeight: 600,
        color: "#718096", //active
        padding: 9,
    }
})