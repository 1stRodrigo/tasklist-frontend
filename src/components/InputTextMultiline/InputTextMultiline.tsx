import { View, TextInput } from 'react-native';
import styles from './InputTextMultiline.styles';

export interface IInputTextMultiline {
  placeholder: string;
}

const InputTextMultiline = (props: IInputTextMultiline) => {
  const { placeholder } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        multiline={true}
        maxLength={300}
        placeholder={placeholder}
        style={[styles.inputText, styles.inputDetails]}
        //onChangeText={setDescription}
      ></TextInput>
    </View>
  );
};

export default InputTextMultiline;
