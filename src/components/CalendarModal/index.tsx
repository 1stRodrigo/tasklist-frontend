import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars"; 

export default function CalendarModal({ setVisible }){

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1}}>
                </View>
            </TouchableWithoutFeedback>
            
            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.dateButton}>
                    <Text style={styles.dateButtonText}>Get date</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3030305b",
    },
    modalContent: {
        flex: 2,
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 16
    },
    dateButton:{
        backgroundColor: "#3B82F6",
        borderRadius: 12,
        height: 55,
        justifyContent: "center",
        alignItems: "center",

    },
    dateButtonText:{
        fontSize: 30,
        fontWeight: 400,
        color: "#FFF"

    }
})