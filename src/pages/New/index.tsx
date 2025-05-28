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
    FlatList
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
import TagButtons from "../../components/New/TagButton";

export default function New(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const { user } = useContext(AuthContext)

    const [modalVisible, setModalVisible] = useState(false);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const [date,setDate] = useState(new Date());
    const [dateOfTask, setDateOfTask] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const [tags, setTags] = useState([]);
    const [tagName, setTagName] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedValuePriority, setSelectedValuePriority] = useState(null);
    const [selectedValueTag, setSelectedValueTag] = useState(null);

    useEffect( () => {

        getTags()

    }, [modalVisible])
        
    //GET TAGS
    async function getTags() {
        try {
            //RECEIVE LIST
            const response = await api.get('/tag')
            
            //LIST ALL TAGS BY USER (WARNING: includes data: id, name, userId)
            const tagsByUser = response.data.filter(
                (tag) => tag.userId === user.id
            );
            setTags(tagsByUser)

            //LIST NAME TAGS
            const tagName = tagsByUser.map((tag) => tag.name)
            setTagName(tagName)
            console.log(tagName)
        }
        catch {
        console.error('Erro ao buscar tags:', Error);
        }
    }

    const renderTags = ({ item }) => (
        <View>
            <TouchableOpacity>
                <View style={styles.tagsList}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    //FUNCTION TAGS
    const handleTagsDefault = (value) => {
        setSelectedValueTag(value);
    }
    function handleTagsCreated() {
        setModalVisible(true);
    }

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


    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                    <View style={styles.header}>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>
                            
                            <TouchableOpacity>
                                <Ionicons name="arrow-back-outline" size={26}/>
                            </TouchableOpacity>
                            
                            <Text style={styles.titles}>Add Task</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                               <Text style={styles.textButtonDefault}>Cancel</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                placeholder="Task name"
                                style={styles.inputText}
                                onChangeText={setTitle}
                                ></TextInput>
                            </View>
                        </View>

                        <View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                    multiline={true}
                                    maxLength={300}
                                    placeholder="Details"
                                    style={[styles.inputText, styles.inputDetails]}
                                    onChangeText={setDescription}
                                    >
                                    </TextInput>
                                </View>

                                <View>

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
                                                placeholderTextColor="rgb(54, 54, 56)"
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

                                <View style={styles.containerTags}>
                                    <View style={{marginBottom: 8}}>
                                        <TouchableOpacity
                                        style={styles.buttonTag}
                                        onPress={() => setModalVisible(true)}>
                                            <Text style={styles.inputText}>Tags</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View>
                                        <View style={styles.tagsList}>

                                            <TagButtons
                                            toggleTags={ () => handleTagsDefault("Work") }
                                            isSelectedTag={selectedValueTag === "Work"}
                                            labelTag={"Work"}
                                            bgColorButtonActive= {'rgb(52, 199, 89)'}
                                            bgColorButton= {'rgba(52, 199, 89, 0.150)'}
                                            />
                                            <TagButtons
                                            toggleTags={ () => handleTagsDefault("Personal") }
                                            isSelectedTag={selectedValueTag === "Personal"}
                                            labelTag={"Personal"}
                                            bgColorButtonActive= {'rgb(0, 122, 255)'}
                                            bgColorButton= {'rgba(0, 122, 255, 0.150)'}
                                            />
                                            <TagButtons
                                            toggleTags={ () => handleTagsDefault("Urgency") }
                                            isSelectedTag={selectedValueTag === "Urgency"}
                                            labelTag={"Urgency"}
                                            bgColorButtonActive= {'rgb(255, 59, 48)'}
                                            bgColorButton= {'rgba(255, 59, 48, 0.150)'}
                                            />
                                            <TagButtons
                                            toggleTags={handleTagsCreated}
                                            isSelectedTag={selectedValueTag === "Others..."}
                                            labelTag={"Others..."}
                                            bgColorButtonActive= {'rgb(142, 142, 147)'}
                                            bgColorButton= {'rgba(142, 142, 147, 0.150)'}
                                            />

                                        </View>    
                                    </View>
                                    
                                <ModalTag
                                modalVisible={modalVisible}
                                setModalVisible={setModalVisible}
                                tags={tags}
                                />

                                
                        </View>
                    </View>
               

                        <View>
                            <View>
                                <Text style={styles.inputText}>Priority</Text>
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

    text: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#333',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 6,
        marginBottom: 22
    },

        
    //DEFAULT STYLES
    titles: {
        fontSize: 30,
        fontWeight: 700 
    },

    textButtonDefault:{
        color: "rgb(0, 122, 255)",
        fontSize: 20,
        fontWeight: 400,
    },

    textInputLabel:{
        fontSize: 19,
        fontWeight: 400,
    },
    inputContainer:{
        backgroundColor: "rgb(242, 242, 247)",
        borderRadius: 11,
        
        //marginTop: 8,
        marginBottom: 15,
        
        paddingRight: 7,
        paddingLeft: 7,
        paddingTop: 5,
        paddingBottom: 5
    },
    inputText: {
        fontSize: 20,
        fontWeight: 400,
        color: "rgb(28, 28, 30)",
        
    },
    inputDetails:{
        minHeight: 100,
        textAlignVertical: "top",
        flexWrap: "nowrap"
    },
    //TAGS
    centeredView:{
        flex: 1,
        margin: 20,
        backgroundColor: "rgb(229, 229, 234)"
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

    },
    containerTags:{
        marginTop: 13,
        marginBottom: 26
    },
    tagsList:{
        flexDirection:"row",
        gap: 15,
        flexWrap: "wrap"
    },
    buttonTagContainer:{
        paddingRight: 15,
        paddingLeft: 12,
        paddingTop: 5,
        paddingBottom: 5,
        //backgroundColor: "rgb(229, 229, 234)",
        borderRadius: 10
    },
    textTagButton: {
        fontSize: 20,
    },
    //PRIORITY
    priorityContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 18,
        //backgroundColor: "rgb(242, 242, 247)",
        marginTop: 8,
        marginBottom: 28,
        gap: 15
    },
    //DATE
    dateContainer:{
        borderRadius: 20,
        backgroundColor: "rgb(235, 235, 240)",
        
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    inputDate:{
        fontSize: 18,
    },

    //ADD
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
        //marginTop: 10,
    },
    containerConfirmButton: {        
    },
    
})