import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";

export default function ModalTag({}){
    return(
        <Modal>
            <View style={styles.container}>
                <Text>Testando Modal</Text>
                <Text>Testando Modal</Text>
                <Text>Testando Modal</Text>
                <Text>Testando Modal</Text>
                <Text>Testando Modal</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f2f"
    }
})