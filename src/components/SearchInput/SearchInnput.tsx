import React, { useState, useRef, useEffect, useCallback } from 'react';

import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './SearchInput.styles';
import { FontSizes } from '../../styles/Typography/typography';
import { Colors } from '../../styles/Colors';

import Ionicon from '@expo/vector-icons/Ionicons';
import { ISearchInputProps, SearchItem } from '../../../shared/types/SearchInput.types';

// data, // Array de objetos { id: string | number, name: string }
// onSelectItem, // Função de callback quando um item é selecionado
// placeholder = 'Pesquisar...',
// initialValue = '', // Função para extrair a chave única do item
// renderItem = ({ item }) => <Text style={styles.itemText}>{item.name}</Text>, // Função para renderizar cada item
const SearchInput = <T extends SearchItem>(props: ISearchInputProps<T>) => {
  const {
    data,
    onSelectItem,
    placeholder = 'Search...',
    initialValue = '',
    renderItem,
    keyExtractor,
  } = props;

  const [searchText, setSearchText] = useState(initialValue);
  const [filteredData, setFilteredData] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchText) {
      const lowercasedSearchText = searchText.toLowerCase();
      const newFilteredData = data.filter((item) =>
        item.name.toLowerCase().includes(lowercasedSearchText),
      );
      setFilteredData(newFilteredData);
    } else {
      setFilteredData(data); // Mostra todos os itens se o input estiver vazio
    }
  }, [searchText, data]);

  const handleFocus = () => {
    setIsListVisible(true);
  };

  const handleClearFocus = useCallback(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
      setIsListVisible(false);
      Keyboard.dismiss();
    }, 100);
  }, []);

  const handleItemPress = (item: T) => {
    setSearchText(item.name);
    onSelectItem(item);
  };

  const internalRenderItem = ({ item }: { item: T }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => handleItemPress(item)}>
      {renderItem({ item, index: 0, separators: null })}
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={handleClearFocus}>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.viewInput}>
            <Ionicon name="search" size={FontSizes.button} color={Colors.mediumGray} />
            <TextInput
              ref={inputRef}
              style={styles.input}
              placeholder={placeholder}
              value={searchText}
              onChangeText={setSearchText}
              onFocus={handleFocus}
              onBlur={handleClearFocus}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>

          {isListVisible && filteredData.length > 0 && (
            <FlatList
              data={filteredData}
              keyExtractor={keyExtractor}
              renderItem={internalRenderItem}
              keyboardShouldPersistTaps="always"
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchInput;
