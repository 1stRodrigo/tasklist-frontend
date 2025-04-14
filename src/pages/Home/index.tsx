import React, { useContext, useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, FlatList} from "react-native"

import Tasklist from "../../components/TaskList";

import { AuthContext } from "../../contexts/AuthContext";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from "../../routes/app.routes";



export default function Home(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();


    const { signOut } = useContext(AuthContext);

    const [tasks, setTasks] = useState([
        { name: 'task 1', priority: 'HIGH'},
        { name: 'task 2', priority: 'HIGH'},
    ]);

    function newTask(){
        navigation.navigate("New")
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titles}>Task List</Text>
            </View>
            
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.buttonFilter}>
                    <Text style={styles.filterText}>All</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonFilter}>
                    <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 12 }}>
                <Text style={styles.sections}>
                    Today
                </Text>

                <View style={styles.listContainer}>
                    <FlatList
                    data={tasks}
                    renderItem={ ({item}) => <Tasklist data={ item } />}
                    />
                </View>
                
                <Text style={styles.sections}>
                    Upcoming
                </Text>

                <View style={styles.listContainer}>
                    <FlatList
                    data={tasks}
                    renderItem={ ({item}) => <Tasklist data={ item } />}
                    />
                </View>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonAdd} onPress={newTask}>
                    <Text style={styles.textButtonAdd}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={signOut}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
            
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
    filterContainer: {
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 6,
        justifyContent: "space-around",
        gap: 16
        
    },
    buttonFilter: {
        flex: 1,
        backgroundColor: "#E2E8F0",
        borderRadius: 13,
        alignItems: "center",
    },
    filterText:{
        fontSize: 16,
        fontWeight: 600,
        color: "#2D3748", //active
        //color: "#718096" //inactive
        padding: 9,
    },
    sections:{
        fontSize: 21,
        fontWeight: 600,
        color: "#2D3748",
        marginBottom: 12
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
    }

})