import { View, TouchableOpacity, Text, Platform, Pressable, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useState } from 'react';
import styles from './InputDate.styles';
import { FontSizes } from '../../styles/Typography/typography';
import { Colors } from '../../styles/Colors';

export interface IInputDate {
  placeholderDate: string;
}

const InputDate = (props: IInputDate) => {
  const { placeholderDate } = props;

  const [date, setDate] = useState(new Date());
  const [dateOfTask, setDateOfTask] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangePicker = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleDatePicker();
        setDateOfTask(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDateOfTask(date.toDateString());
    toggleDatePicker();
  };

  return (
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

        {showPicker && Platform.OS === 'ios' && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <TouchableOpacity style={{ margin: 5 }} onPress={toggleDatePicker}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmIOSDate}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}

        {!showPicker && (
          <Pressable onPress={toggleDatePicker}>
            <TextInput
              placeholder={placeholderDate}
              value={dateOfTask}
              onChangeText={setDateOfTask}
              placeholderTextColor="rgb(54, 54, 56)"
              editable={false}
              onPressIn={toggleDatePicker}
            />
          </Pressable>
        )}

        <TouchableOpacity onPress={toggleDatePicker}>
          <Ionicons
            name="chevron-down-outline"
            size={FontSizes.headline}
            color={Colors.mediumGray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputDate;
