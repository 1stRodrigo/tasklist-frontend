import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontSizes, Spacing, FontWeights, BorderRadius } from '../../styles/Typography/typography';
import { Colors } from '../../styles/Colors';

export default function TagButtons({
  toggleTags,
  isSelectedTag,
  labelTag,
  bgColorButtonActive,
  bgColorButton,
}) {
  return (
    <TouchableOpacity onPress={toggleTags}>
      <View style={styles.buttonTagContainer}>
        <Text
          style={[
            isSelectedTag
              ? {
                  color: Colors.appleBlue,
                  fontSize: FontSizes.button,
                  fontWeight: FontWeights.normal,
                }
              : {
                  color: Colors.mediumGray,
                  fontSize: FontSizes.button,
                  fontWeight: FontWeights.normal,
                },
          ]}
        >
          {labelTag}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonTagContainer: {
    paddingRight: 15,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
});
