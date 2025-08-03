import { StyleSheet } from 'react-native';
import { Spacing, BorderRadius, FontSizes, FontWeights } from '../../styles/Typography/typography';
import { Colors } from '../../styles/Colors';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.l,
    marginBottom: Spacing.l,

    paddingRight: Spacing.s,
    paddingLeft: Spacing.s,
    paddingTop: Spacing.xxs,
    paddingBottom: Spacing.xs,
  },
  inputDetails: {
    minHeight: 100,
    textAlignVertical: 'top',
    flexWrap: 'nowrap',
  },
  inputText: {
    fontSize: FontSizes.button,
    color: Colors.black,
  },
});
