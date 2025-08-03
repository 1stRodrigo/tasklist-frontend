import { StyleSheet } from 'react-native';
import { Spacing, BorderRadius, FontSizes, FontWeights } from '../../styles/Typography/typography';
import { Colors } from '../../styles/Colors';

export default StyleSheet.create({
  containerPriority: {
    marginTop: Spacing.xs,
    marginBottom: Spacing.xl,
    paddingRight: Spacing.s,
    paddingLeft: Spacing.s,
  },
  inputContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.l,
    marginBottom: Spacing.l,
    paddingRight: Spacing.s,
    paddingLeft: Spacing.s,
    paddingTop: Spacing.xxs,
    paddingBottom: Spacing.xs,
  },
  inputText: {
    fontSize: FontSizes.button,
    color: Colors.black,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.s,
    paddingRight: Spacing.xs,
    paddingLeft: Spacing.xs,
    paddingTop: Spacing.s,
    paddingBottom: Spacing.s,
  },
});
