import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Tasklist(props: any) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 12,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 5,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E2E8F0',
      }}
    >
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#3B82F6' : '#E2E8F0'}
        style={styles.checkbox}
      />

      <TouchableOpacity style={{ width: '65%' }}>
        <View>
          <Text style={styles.taskNamesText}>{props.data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    padding: 10,
    borderRadius: 6,
  },
  taskNamesText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#2D3748',
  },
});
