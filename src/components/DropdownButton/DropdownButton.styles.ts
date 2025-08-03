import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { BorderRadius, FontSizes, FontWeights, Spacing } from '../../styles/Typography/typography';

export default StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
    zIndex: 1, // Garante que a lista apareça sobre outros elementos
  },
  button: {},
  buttonText: {
    color: Colors.mediumGray,
    fontSize: FontSizes.buttonSecondary,
    fontWeight: FontWeights.normal,
  },
  optionsList: {
    position: 'absolute',
    top: '100%', // Posiciona abaixo do botão
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.l,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: Spacing.s,
    marginTop: Spacing.xs, // Espaço entre o botão e a lista
    maxHeight: 300, // Limita a altura da lista para evitar que ela fique muito grande
  },
  listContent: {
    paddingBottom: 5,
  },
  optionItem: {
    paddingVertical: Spacing.xs,
    marginVertical: Spacing.xxs,
    borderRadius: BorderRadius.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionItemSelected: {},
  optionText: {
    fontSize: FontSizes.button,
    color: Colors.mediumGray,
    fontWeight: FontWeights.normal,
    paddingHorizontal: Spacing.s,
  },
  optionTextSelected: {
    fontWeight: FontWeights.normal,
    color: Colors.appleBlue,
    paddingVertical: Spacing.xxs,
    paddingHorizontal: Spacing.s,
    borderRadius: BorderRadius.l,
  },
});
