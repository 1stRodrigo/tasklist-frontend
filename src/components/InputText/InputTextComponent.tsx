import { View, TextInput } from 'react-native';
import styles from './InputTextComponent.styles';

export interface IInputTextComponent {
  placeholder: string;
  //criar um reducer para receber onChangeText={setText}
}

const InputTextComponent = (props: IInputTextComponent) => {
  const { placeholder } = props;

  return (
    <View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            style={styles.inputText}
            //onChangeText={setText}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default InputTextComponent;
