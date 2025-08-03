import { StyleSheet } from 'react-native';
import { Spacing, FontSizes } from '../../../styles/Typography/typography';
import { Colors } from '../../../styles/Colors';

export default StyleSheet.create({
  containerTags: {
    marginTop: Spacing.xs,
    marginBottom: Spacing.xl,

    paddingRight: Spacing.s,
    paddingLeft: Spacing.s,
  },
  inputText: {
    fontSize: FontSizes.button,
    color: Colors.black,
  },
  tagsList: {
    flexDirection: 'row',
    //gap: Spacing.m,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
