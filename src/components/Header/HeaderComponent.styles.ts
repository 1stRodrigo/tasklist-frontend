import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { FontSizes, Spacing, FontWeights, BorderRadius } from '../../styles/Typography/typography';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.xl,
    marginBottom: Spacing.l,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  textTitle: {
    color: Colors.black,
    fontSize: FontSizes.title,
    fontWeight: FontWeights.bold,
  },
  textButton: {
    color: Colors.appleBlue,
    fontSize: FontSizes.buttonSecondary,
    fontWeight: FontWeights.normal,
  },
  icon: {
    fontSize: FontSizes.button,
  },
});
