import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal, FlatList, TextInput, FlatListComponent } from "react-native";

export default function ModalTag({modalVisible, tags, setModalVisible, laoding}){
    //estou passando para esse componente: loading, dataTags, 
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query)
    }

    const renderTags = ({ item }) => (
        <View>
            <TouchableOpacity>
                <View style={styles.tagsList}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );



    return(
    <Modal
    visible={modalVisible}
    onRequestClose={() => setModalVisible(!modalVisible)}
    animationType="slide"
    >
        <View>
            <Text style={{textAlign: "center", fontSize: 20}}>Enter tag here:</Text>
            <TextInput
            placeholder="search tag"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
            />
        </View>
            <FlatList
            data={tags}
            keyExtractor={(item) => item.id}
            renderItem={renderTags}
            />
            

                <View>
                    <View>    
                        <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={styles.cancelButton}>
                            <View>
                                <Text style={styles.cancelButtonText}>
                                    Cancel
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={styles.addButton}>                                                
                            <View>
                                <Text style={styles.cancelButtonText}>
                                    Insert
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
    </Modal>





    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f2f"
    },
    cancelButton:{
    backgroundColor: "#E2E8F0",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 50,
    paddingRight: 50,
    },    
    cancelButtonText:{
    color: "#2D3748",
    fontSize: 24,
    fontWeight: 400,
    },
    addButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 50,
    paddingRight: 50,
    },
    tagsList:{
        flexDirection:"row",
        gap: 15,
        flexWrap: "wrap"
    },


})