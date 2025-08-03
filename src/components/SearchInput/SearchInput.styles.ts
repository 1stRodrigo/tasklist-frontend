import { StyleSheet } from 'react-native';
import { Spacing, BorderRadius, FontWeights, FontSizes } from '../../styles/Typography/typography';
import { Colors } from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    zIndex: 1,
    backgroundColor: Colors.white,
    padding: Spacing.s,
    borderRadius: BorderRadius.l,
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.softGray,
    borderColor: Colors.mediumGray,
    paddingHorizontal: Spacing.s,
    borderRadius: BorderRadius.l,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontWeight: FontWeights.normal,
  },
  listItem: {
    padding: 10,
    borderRadius: BorderRadius.l,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    marginTop: Spacing.s,
  },
  itemText: {
    fontSize: FontSizes.button,
    color: Colors.black,
  },
});
