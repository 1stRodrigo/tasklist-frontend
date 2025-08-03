import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './DropdownButton.styles';

const DropdownButton = ({ title, options, onSlect, initialSelected = [] }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initialSelected);

  const toggleButton = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectItem = (item) => {
    let newSelectedItems;
    if (selectedItems.includes(item)) {
      newSelectedItems = selectedItems.filter((selected) => selected !== item);
    } else {
      newSelectedItems = [...selectedItems, item];
    }
    setSelectedItems(newSelectedItems);
    onSelect(newSelectedItems); // Chama a função de callback com os itens selecionados
  };

  const renderOptionItem = ({ item }) => {
    const isSelected = selectedItems.includes(item);
    return (
      <TouchableOpacity
        style={[styles.optionItem, isSelected && styles.optionItemSelected]}
        onPress={() => handleSelectItem(item)}
      >
        <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
          {item.label || item} {/* Suporta objeto { label: '...', value: '...' } ou string */}
        </Text>
        {/* Opcional: ícone de seleção */}
        {/* {isSelected && <Icon name="checkmark-circle" size={16} color="#28a745" />} */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.dropdownContainer}>
      {showOptions && (
        <View style={styles.optionsList}>
          <FlatList
            data={options}
            renderItem={renderOptionItem}
            keyExtractor={(item) => (item.value || item).toString()} // Garante que a chave seja string
            contentContainerStyle={styles.listContent}
          />
        </View>
      )}
    </View>
  );
};

export default DropdownButton;
