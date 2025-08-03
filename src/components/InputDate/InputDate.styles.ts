import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { Spacing, BorderRadius, FontSizes, FontWeights } from '../../styles/Typography/typography';

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
  dateContainer: {
    backgroundColor: Colors.lightGray,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputDate: {
    fontSize: 18,
  },
});
