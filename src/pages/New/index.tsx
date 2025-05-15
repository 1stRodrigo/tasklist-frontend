import React, { useState, useContext, useEffect } from "react"
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView, 
    TextInput, 
    Pressable, 
    Platform,
    ScrollView,
    Modal,
} from "react-native"

import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

import PriorityButtons from "../../components/New/PriorityButton";
import ModalTag from "../../components/New/ModalTag";

import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from "../../routes/app.routes";

export default function New(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const { user } = useContext(AuthContext)

    const [modalVisible, setModalVisible] = useState(false);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const [date,setDate] = useState(new Date());
    const [dateOfTask, setDateOfTask] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const [selectedValuePriority, setSelectedValuePriority] = useState(null)

    //FUNCTIONS DATE
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChangePicker = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === "android"){
                toggleDatePicker();
                setDateOfTask(currentDate.toDateString());
            }
        } else {
            toggleDatePicker();
        }
    }

    const confirmIOSDate = () => {
        setDateOfTask(date.toDateString());
        toggleDatePicker();
    }

    //PRIORITY FUNCTIONS
    const handlePriority = (value) => {
        setSelectedValuePriority(value)
    }

    //REQUEST A NEW TASK FUNCTION
    async function sendTask(){

        console.log({
            title,
            description,
            due_date: dateOfTask,
            status: "PENDING",
            priority: selectedValuePriority,
            tag_name: "SEM TAG",
        });

        try{
            const response = await api.post('/task', {
                title: title,
                description: description,
                due_date: dateOfTask,
                status: "PENDING",
                priority: selectedValuePriority,
                tag_name: "SEM TAG",
            });
    
            console.log(response.data);

        } catch (error) {
            console.log(error);
            
        }
        

    // TAG FUNCTIONS
    function toggleSelectTag(){

    }




    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.titles}>Add Task</Text>
                    </View>

                    <View>
                        <View>
                            <View>
                                <Text style={styles.textInputLabel}>Name</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                placeholder="Example"
                                style={styles.inputText}
                                onChangeText={setTitle}
                                ></TextInput>
                            </View>
                        </View>

                        <View>
                                <View>
                                    <Text style={styles.textInputLabel}>Description</Text>
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                    placeholder="Example"
                                    style={styles.inputText}
                                    onChangeText={setDescription}
                                    >
                                    </TextInput>
                                </View>

                                <View>

                                <Modal
                                visible={modalVisible}
                                onRequestClose={() => setModalVisible(!modalVisible)}
                                animationType="slide"
                                >
                                    <ScrollView>
                                        <View style={styles.centeredView}>

                                            <View>
                                                <View>
                                                    {/* Button select tag */}
                                                    <View>
                                                        <TouchableOpacity>
                                                            <Text style={styles.textInputLabel}>Tag 1</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View>
                                                        <TouchableOpacity>
                                                            <Text style={styles.textInputLabel}>Tag 1</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View>
                                                        <TouchableOpacity>
                                                            <Text style={styles.textInputLabel}>Tag 1</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View>
                                                        <TouchableOpacity>
                                                            <Text style={styles.textInputLabel}>Tag 1</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={styles.containerAddOrCancel}>
                                                <View style={styles.containerConfirmButton}>    
                                                    <TouchableOpacity
                                                    onPress={() => setModalVisible(false)}
                                                    style={styles.cancelButton}>
                                                        <View>
                                                            <Text style={styles.cancelButtonText}>
                                                                Cancel
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    
                                                    <TouchableOpacity
                                                    onPress={() => setModalVisible(false)}
                                                    style={styles.addButton}>                                                
                                                        <View>
                                                            <Text style={styles.cancelButtonText}>
                                                                Insert
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </Modal>


                                <TouchableOpacity
                                style={styles.buttonTag}
                                onPress={() => setModalVisible(true)}>
                                    <Text>Show tags</Text>
                                </TouchableOpacity>
                        </View>
                    </View>

                        <View>
                            <View>
                                <Text style={styles.textInputLabel}>Date</Text>
                            </View>

                            <View style={styles.inputContainer}>

                                <View style={styles.dateContainer}>
                            
                                    {showPicker && (
                                        <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={date}
                                        onChange={onChangePicker}
                                        minimumDate={new Date('1-1-2025')}
                                        />
                                    )}

                                    {showPicker && Platform.OS === "ios" && (
                                        <View
                                        style={{ 
                                            flexDirection: "row", 
                                            justifyContent: "space-around"
                                    }}
                                    >
                                    <TouchableOpacity style={{margin: 5}} onPress={toggleDatePicker}>
                                        <Text>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={confirmIOSDate}>
                                        <Text>Confirm</Text>
                                    </TouchableOpacity>
                                </View>    
                            )}


                            {!showPicker && (
                                <Pressable
                                    onPress={toggleDatePicker}
                                >
                                    <TextInput
                                        placeholder="Mon Jun 21 2003"
                                        value={dateOfTask}
                                        onChangeText={setDateOfTask}
                                        placeholderTextColor="#718096"
                                        editable={false}
                                        onPressIn={toggleDatePicker}
                                    />
                                </Pressable>
                            )}

                            <TouchableOpacity onPress={toggleDatePicker}>
                                <Ionicons name="chevron-down-outline" size={26} color="#F5F7FA " />
                            </TouchableOpacity>


                            </View>
                        </View>               

                        <View>
                            <View>
                                <Text style={styles.textInputLabel}>Priority</Text>
                            </View>
                                <View style={styles.priorityContainer}>
                                    <PriorityButtons
                                    togglePriority={ () => handlePriority("LOW") }
                                    isSelectedPriority={ selectedValuePriority === "LOW"}
                                    labelPriority="Low"
                                    />
                                    <PriorityButtons
                                    togglePriority={ () => handlePriority("MEDIUM")}
                                    isSelectedPriority={ selectedValuePriority === "MEDIUM"}
                                    labelPriority="Medium"
                                    />
                                    <PriorityButtons
                                    togglePriority={ () => handlePriority("HIGH")}
                                    isSelectedPriority={ selectedValuePriority === "HIGH"}
                                    labelPriority="High"
                                    />
                                </View>
                            </View>
                        </View>
                        
                </View>                     

                    <View style={styles.containerAddOrCancel}>
                        <View style={styles.containerConfirmButton}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={navigation.goBack}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={sendTask}
                            >
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


            </ScrollView>        
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: "#F5F7FA"
    },
    header:{
        marginTop: 25,
        marginLeft: 6,
        marginBottom: 20
    },
    titles: {
        fontSize: 32,
        fontWeight: 700 
    },
    textInputLabel:{
        fontSize: 19,
        fontWeight: 400,
    },
    inputContainer:{
        backgroundColor: "#FFF",
        borderRadius: 11,
        
        marginTop: 8,
        marginBottom: 28,
        
        paddingRight: 7,
        paddingLeft: 7,
        paddingTop: 5,
        paddingBottom: 5
    },
    inputText: {
        fontSize: 20,
        
    },
    //TAGS
    centeredView:{
        flex: 1,
        margin: 20,
        backgroundColor: "#F5F7FA"
    },
    outerView:{
        backgroundColor: "#3f403f97",
    },
    modalView:{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },
    buttonTag:{
        backgroundColor: "#FFF",
        borderRadius: 18,
        padding: 20
    },
    //PRIORITY
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
    //DATE
    dateContainer:{
        borderRadius: 20,
        backgroundColor: "#FFF",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    addButton: {
        backgroundColor: "#3B82F6",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 50,
        paddingRight: 50,
    },
    cancelButton:{
        backgroundColor: "#E2E8F0",
        borderRadius: 20,
        alignItems: "center",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 50,
        paddingRight: 50,
    },
    cancelButtonText:{
        color: "#2D3748",
        fontSize: 24,
        fontWeight: 400,
    },
    addButtonText:{
        color: "#FFF",
        fontSize: 24,
        fontWeight: 400,
    },
    containerAddOrCancel:{
        marginTop: 10,
    },
    containerConfirmButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 5,
        marginRight: 5,
        
    },
    
})