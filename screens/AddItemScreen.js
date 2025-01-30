import React, { useState, useEffect } from "react"
import { View, TextInput, Button, Alert } from "react-native"
import { getItems, saveItems } from "../utils/storage"
import globalStyles from "../styles/globalStyles"

export default function AddItemScreen({ navigation, route }) {
  const { item, onSave } = route.params || {} 

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (item) {
      setName(item.name)
      setDescription(item.description)
    }
  }, [item])

  const handleSaveItem = async () => {
    if (name.trim() === "") {
      Alert.alert("Error", "Please enter a name for the item")
      return
    }
  
    const updatedItem = { id: item?.id || Date.now().toString(), name: name.trim(), description: description.trim() }
    const currentItems = await getItems()
  
    const updatedItems = item
      ? currentItems.map((i) => (i.id === item.id ? updatedItem : i)) 
      : [...currentItems, updatedItem] 
  
    await saveItems(updatedItems)
    if (onSave) onSave(updatedItem) 
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
      <Button title={item ? "Save Changes" : "Add Item"} onPress={handleSaveItem} />
    </View>
  )
}
