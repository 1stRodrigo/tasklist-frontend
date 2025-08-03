import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/Colors';
import { BorderRadius, FontSizes, Spacing } from '../../../styles/Typography/typography';

export default StyleSheet.create({
  textInputLabel: {
    fontSize: 19,
    fontWeight: 400,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 18,
    //backgroundColor: "rgb(242, 242, 247)",
    marginTop: 8,
    marginBottom: 28,
    paddingRight: 7,
    paddingLeft: 7,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonFilter: {
    flex: 1,
    //alignItems: "center",
    paddingLeft: Spacing.s,
    paddingRight: Spacing.s,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.m,
  },
  filterText: {
    fontSize: FontSizes.button,
    color: Colors.mediumGray, //inactive
  },
  filterTextActive: {
    color: Colors.appleBlue, //active
  },
});
