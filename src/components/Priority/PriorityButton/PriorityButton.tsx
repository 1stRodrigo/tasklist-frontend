import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  FontSizes,
  FontWeights,
  Spacing,
  BorderRadius,
} from '../../../styles/Typography/typography';
import { Colors } from '../../../styles/Colors';

import styles from './PriorityButton.styles';

export default function PriorityButtons({ togglePriority, isSelectedPriority, labelPriority }) {
  return (
    <TouchableOpacity style={styles.buttonFilter} onPress={togglePriority}>
      <Text
        style={[
          styles.filterText,
          isSelectedPriority ? styles.filterTextActive : styles.filterText,
        ]}
      >
        {labelPriority}
      </Text>
    </TouchableOpacity>
  );
}
