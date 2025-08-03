import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './PriorityComponent.styles';
import PriorityButtons from './PriorityButton/PriorityButton';

export interface IPrioritySelect {
  priority1: string;
  priority2: string;
  priority3: string;
}

const PrioritySelect = (props: IPrioritySelect) => {
  const { priority1, priority2, priority3 } = props;

  const [selectedValuePriority, setSelectedValuePriority] = useState(null);

  const handlePriority = (value) => {
    setSelectedValuePriority(value);
  };

  return (
    <View style={styles.containerPriority}>
      <View>
        <Text style={styles.inputText}>Priority</Text>
      </View>
      <View style={styles.priorityContainer}>
        <PriorityButtons
          togglePriority={() => handlePriority(priority1)}
          isSelectedPriority={selectedValuePriority === priority1}
          labelPriority={priority1}
        />
        <PriorityButtons
          togglePriority={() => handlePriority(priority2)}
          isSelectedPriority={selectedValuePriority === priority2}
          labelPriority={priority2}
        />
        <PriorityButtons
          togglePriority={() => handlePriority(priority3)}
          isSelectedPriority={selectedValuePriority === priority3}
          labelPriority={priority3}
        />
      </View>
    </View>
  );
};

export default PrioritySelect;
