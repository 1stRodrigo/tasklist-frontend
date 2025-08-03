import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { BorderRadius, FontSizes, FontWeights, Spacing } from '../../styles/Typography/typography';

export default StyleSheet.create({
  confirmButton: {
    backgroundColor: Colors.appleBlue,
    borderRadius: BorderRadius.l,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.m,
    paddingBottom: Spacing.m,
    paddingLeft: 50,
    paddingRight: 50,
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.semibold,
  },

  cancelButton: {
    backgroundColor: Colors.mediumGray,
    borderRadius: BorderRadius.l,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.m,
    paddingBottom: Spacing.m,
    paddingLeft: 50,
    paddingRight: 50,
  },
  cancelButtonText: {
    color: Colors.white,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.normal,
  },

  primaryButton: {
    backgroundColor: Colors.appleBlue,
    borderRadius: BorderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.s,
    paddingBottom: Spacing.s,
    paddingLeft: 50,
    paddingRight: 50,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.normal,
  },

  secondaryButton: {
    backgroundColor: Colors.mediumGray,
    borderRadius: BorderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.s,
    paddingBottom: Spacing.s,
    paddingLeft: 50,
    paddingRight: 50,
  },
  secondaryButtonText: {
    color: Colors.black,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.normal,
  },

  defaultButton: {
    backgroundColor: Colors.appleBlue,
    borderRadius: BorderRadius.l,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.m,
    paddingBottom: Spacing.m,
    paddingLeft: 50,
    paddingRight: 50,
  },
  defaultButtonText: {
    color: Colors.white,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.semibold,
  },
});
