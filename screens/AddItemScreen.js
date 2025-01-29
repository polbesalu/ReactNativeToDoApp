import React, { useState } from "react"
import { View, TextInput, Button, Alert } from "react-native"
import { getItems, saveItems } from "../utils/storage"
import globalStyles from "../styles/globalStyles"

export default function AddItemScreen({ navigation }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleAddItem = async () => {
    if (name.trim() === "") {
      Alert.alert("Error", "Please enter a name for the item")
      return
    }

    const newItem = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
    }

    const currentItems = await getItems()
    const updatedItems = [...currentItems, newItem]
    await saveItems(updatedItems)

    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <TextInput style={globalStyles.input} placeholder="Item Name" value={name} onChangeText={setName} />
      <TextInput
        style={globalStyles.input}
        placeholder="Item Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  )
}

