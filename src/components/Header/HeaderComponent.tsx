import { View, TouchableOpacity, Text } from 'react-native';
import styles from './HeaderComponent.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontSizes } from '../../styles/Typography/typography';

export interface IHeaderComponentProps {
  title?: string;
  backButton?: boolean;
  rightButton?: boolean;
  rightButtonText?: string;
  onRightButtonPress?: () => void;
  onBack?: () => void;
}

const HeaderComponent = (props: IHeaderComponentProps) => {
  const { title, backButton, rightButton, rightButtonText, onRightButtonPress, onBack } = props;

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 18 }}>
        {backButton && (
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={FontSizes.button} />
          </TouchableOpacity>
        )}

        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View>
        {rightButton && (
          <TouchableOpacity onPress={onRightButtonPress}>
            <Text style={styles.textButton}>{rightButtonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
