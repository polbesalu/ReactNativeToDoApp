import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import globalStyles from "../styles/globalStyles"

export default function ItemList({ items, onDeleteItem, onEditItem }) {
  const renderItem = ({ item }) => (
    <View style={globalStyles.itemContainer}>
      <View>
        <Text style={globalStyles.itemName}>{item.name}</Text>
        <Text style={globalStyles.itemDescription}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}> 
      <TouchableOpacity style={globalStyles.editButton} onPress={() => onEditItem(item)}>
        <Text style={globalStyles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.deleteButton} onPress={() => onDeleteItem(item.id)}>
        <Text style={globalStyles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
    </View>
  )

  return <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} style={globalStyles.list} />
}

