import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';

import { Colors } from '../../styles/Colors';
import { FontSizes, Spacing, FontWeights, BorderRadius } from '../../styles/Typography/typography';

import { api } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../routes/app.routes';

import PriorityButtons from '../../components/Priority/PriorityButton/PriorityButton';
import ModalTag from '../../components/New/ModalTag';
import HeaderComponent from '../../components/Header/HeaderComponent';
import InputTextComponent from '../../components/InputText/InputTextComponent';
import InputTextMultiline from '../../components/InputTextMultiline/InputTextMultiline';
import InputDate from '../../components/InputDate/InputDate';
import TagSelect from '../../components/Tags/TagsSelect/TagSelect';
import PrioritySelect from '../../components/Priority/PriorityComponent';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

const NewTaskScreen: React.FC = () => {
  const handleRightButtonPress = () => {
    //TODO
    console.log('handle right button');
  };

  const handleBackButtonPress = () => {
    //TODO
    console.log('handle back button');
  };

  const handleCancelButton = () => {
    //TODO
    console.log('handle cancel button');
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        onBack={handleBackButtonPress}
        onRightButtonPress={handleRightButtonPress}
        backButton={true}
        rightButton={true}
        rightButtonText="Cancel"
        title="Add Task"
      />

      <InputTextComponent placeholder="Title" />

      <InputTextMultiline placeholder="Details" />

      <InputDate placeholderDate="Due date" />

      <TagSelect tag1="Work" tag2="Personal" tag3="Urgency" others="Others" />

      <PrioritySelect priority1="Low" priority2="Medium" priority3="High" />

      <RoundedButton variant="confirm" text="" handleButton={handleCancelButton} />
    </SafeAreaView>
  );
};

export default NewTaskScreen;
/*
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
        <HeaderComponent
        button="Cancel"
        icon={true}
        title="Add task"
        />

        <InputTextComponent
        placeholder="Title"
        />

        <InputTextMultiline
        placeholder="Details"
        />    

        <InputDate
        placeholderDate="Mon 21 July 2025"
        />                        

        <TagSelect
        tag="Teste"
        />

        <ModalTag
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tags={tags}
        laoding={false}
        />
                                  
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
*/

const styles = StyleSheet.create({
  title: {
    color: Colors.black,
    fontSize: FontSizes.largeTitle,
    fontWeight: FontWeights.bold,
  },
  container: {
    flex: 1,
    padding: Spacing.m,
    backgroundColor: Colors.white,
  },

  //DEFAULT STYLES

  textButtonDefault: {},

  textInputLabel: {
    fontSize: 19,
    fontWeight: 400,
  },
  inputContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.l,
    marginBottom: Spacing.l,

    paddingRight: Spacing.s,
    paddingLeft: Spacing.s,
    paddingTop: Spacing.xxs,
    paddingBottom: Spacing.xs,
  },
  inputText: {
    fontSize: FontSizes.button,
    color: Colors.black,
  },

  inputDetails: {
    minHeight: 100,
    textAlignVertical: 'top',
    flexWrap: 'nowrap',
  },
  //TAGS
  centeredView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'rgb(229, 229, 234)',
  },
  outerView: {
    backgroundColor: '#3f403f97',
  },
  modalView: {
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
    elevation: 2,
  },
  containerTags: {
    marginTop: Spacing.xs,
    marginBottom: Spacing.xl,
  },
  tagsList: {
    flexDirection: 'row',
    gap: Spacing.m,
    flexWrap: 'wrap',
  },
  buttonTagContainer: {
    paddingRight: 15,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    //backgroundColor: "rgb(229, 229, 234)",
    borderRadius: 10,
  },
  textTagButton: {
    fontSize: 20,
  },
  //PRIORITY
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderRadius: BorderRadius.l,
    //backgroundColor: "rgb(242, 242, 247)",
    marginTop: Spacing.s,
    marginBottom: Spacing.xl,
    gap: Spacing.m,
  },
  //DATE
  dateContainer: {
    backgroundColor: Colors.lightGray,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputDate: {
    fontSize: 18,
  },

  //ADD
  addButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 50,
    paddingRight: 50,
  },
  cancelButton: {
    backgroundColor: '#E2E8F0',
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 50,
    paddingRight: 50,
  },
  cancelButtonText: {
    color: '#2D3748',
    fontSize: 24,
    fontWeight: 400,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 400,
  },
  containerAddOrCancel: {
    //marginTop: 10,
  },
  containerConfirmButton: {},
});
