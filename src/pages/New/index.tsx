import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Modal } from "react-native"
import CalendarModal from '../../components/CalendarModal';

export default function New(){
    const [modalVisible, setModalVisible] = useState(false);

    function getDate(dateSelected){
        console.log(dateSelected)
    }

    return(
        <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.titles}>Task List</Text>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Text style={styles.sections}>
                            Name
                        </Text>
                        <View style={styles.listContainer}>
                            <TextInput
                            placeholder="Example"
                            >
                            </TextInput>
                        </View>
                        
                        <Text style={styles.sections}>
                            Date
                        </Text>

                        <View style={styles.dateContainer}>
                            <TouchableOpacity onPress={() => setModalVisible(true) }>
                                <Text>Month Day, Year</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.sections}>Priority</Text>
                                <View style={styles.priorityContainer}>
                                    <TouchableOpacity style={styles.buttonFilter}>
                                        <Text style={styles.filterText}>Low</Text>
                                    </TouchableOpacity>
                                
                                    <TouchableOpacity style={styles.buttonFilter}>
                                        <Text style={styles.filterText}>Medium</Text>
                                    </TouchableOpacity>
                                
                                    <TouchableOpacity style={styles.buttonFilter}>
                                        <Text style={styles.filterText}>High</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>                        

                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity style={styles.buttonFilter}>
                                <Text style={styles.filterText}>Cancel</Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity style={styles.buttonFilter}>
                                <Text style={styles.filterText}>Add</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.listContainer}>
                            
                        </View>
                    </View>


                    {/* ----- MODAL ----- */}
                    <Modal visible={modalVisible} animationType="slide" transparent={true}>
                        <CalendarModal
                            setVisible={() => setModalVisible(false)}
                            handleDate={getDate}
                        />
                    </Modal>
                    
                </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F7FA"
    },
    header:{
        marginTop: 25,
        marginLeft: 6
    },
    titles: {
        fontSize: 28,
        fontWeight: 700 
    },
    priorityContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 13,
        backgroundColor: "#E2E8F0",
        
    },
    buttonFilter: {
        flex: 1,
        alignItems: "center",
    },
    filterText:{
        fontSize: 20,
        fontWeight: 600,
        color: "#2D3748", //active
        //color: "#718096" //inactive
        padding: 9,
    },
    sections:{
        fontSize: 21,
        fontWeight: 400,
        color: "#2D3748",
        marginBottom: 12
    },
    dateContainer:{
        borderRadius: 20,
        backgroundColor: "#FFF",
        padding: 10
    },
    containerList:{
        marginTop: 16,
    },
    listContainer:{
        backgroundColor: "#FFF",
        flexDirection: "row",
        paddingRight: 7,
        paddingLeft: 7,
        borderRadius: 11,
    },
    buttonView:{
        position: "absolute",
        bottom: 50,
        right: 30,
        alignItems: "center",
        
    },
    addButtonContainer:{
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 6,
        justifyContent: "space-around",
        gap: 16
    },
    buttonAdd: {
        backgroundColor: "#3B82F6",
        width: 65,
        height: 65,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonAdd:{
        color: "#FFF",
        fontWeight: 500,
        fontSize: 40,
    },
    
})