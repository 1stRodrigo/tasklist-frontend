import { View, TouchableOpacity, Text } from 'react-native';
import styles from './RoundedButton.styles';

type buttonVariant = 'default' | 'confirm' | 'cancel' | 'primary' | 'secondary';

export interface IRoundedButtonProps {
  text?: string;
  variant?: buttonVariant;
  handleButton(): void;
}

const RoundedButton = (props: IRoundedButtonProps) => {
  const {
    text,
    variant = 'default', //define for default if empty on call
    handleButton,
  } = props;

  let buttonText = text;
  if (!buttonText) {
    switch (variant) {
      case 'confirm':
        buttonText = 'Confirm';
        break;
      case 'cancel':
        buttonText = 'Cancel';
        break;
      default:
        buttonText = 'Confirm';
    }
  }

  const getButtonStyle = () => {
    switch (variant) {
      case 'confirm':
        return styles.confirmButton;
      case 'cancel':
        return styles.cancelButton;
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      default:
        return styles.defaultButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'confirm':
        return styles.confirmButtonText;
      case 'cancel':
        return styles.cancelButtonText;
      case 'primary':
        return styles.primaryButtonText;
      case 'secondary':
        return styles.secondaryButtonText;
      default:
        return styles.defaultButtonText;
    }
  };

  return (
    <View>
      <TouchableOpacity style={getButtonStyle()} onPress={handleButton}>
        <Text style={getTextStyle()}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundedButton;
