import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../routes/app.routes';
import HeaderComponent from '../../components/Header/HeaderComponent';
import { Colors } from '../../styles/Colors';
import SearchInput from '../../components/SearchInput/SearchInnput';
import { SearchItem } from '../../../shared/types/SearchInput.types';

//USING MOCK UNTIL I CREATE A REDUX FOR GET TASKS
const mockData = [
  { id: '1', name: 'Maçã' },
  { id: '2', name: 'Banana' },
  { id: '3', name: 'Laranja' },
  { id: '4', name: 'Abacaxi' },
  { id: '5', name: 'Manga' },
  { id: '6', name: 'Morango' },
  { id: '7', name: 'Uva' },
  { id: '8', name: 'Pêssego' },
  { id: '9', name: 'Cereja' },
  { id: '10', name: 'Kiwi' },
];

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [selectedItem, setSelectedItem] = useState<SearchItem | null>(null);

  const handleSelectedItem = (item: SearchItem) => {
    setSelectedItem(item);
    //TDOD
    // CREATE A SCREEN WITH TASK DETAILS
    Alert.alert('Item selcionado', `Você selecionou ${item.name}`);
  };

  const renderSearchItem = ({ item }: { item: SearchItem }) => {
    return <Text style={{ color: Colors.black }}>{item.name}</Text>;
  };

  const keyExtractor = (item: SearchItem) => item.id.toString();

  const { signOut } = useContext(AuthContext);
  function newTask() {
    navigation.navigate('New');
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent rightButton={true} rightButtonText="Filter" title="Task List" />

      <View style={{ flex: 1 }}>
        <SearchInput
          data={mockData}
          onSelectItem={handleSelectedItem}
          placeholder="Search"
          initialValue={''}
          renderItem={renderSearchItem}
          keyExtractor={keyExtractor}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonAdd} onPress={newTask}>
          <Text style={styles.textButtonAdd}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.lightGray,
  },
  header: {
    marginTop: 25,
    marginLeft: 6,
  },
  titles: {
    fontSize: 28,
    fontWeight: 700,
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 6,
    justifyContent: 'space-around',
    gap: 16,
  },
  buttonFilter: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    borderRadius: 13,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#2D3748', //active
    //color: "#718096" //inactive
    padding: 9,
  },
  sections: {
    fontSize: 21,
    fontWeight: 600,
    color: '#2D3748',
    marginBottom: 12,
  },
  containerList: {
    marginTop: 16,
  },
  listContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingRight: 7,
    paddingLeft: 7,
    borderRadius: 11,
  },
  buttonView: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: '#3B82F6',
    width: 65,
    height: 65,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonAdd: {
    color: '#FFF',
    fontWeight: 500,
    fontSize: 40,
  },
});
