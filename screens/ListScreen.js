import React, { useState, useEffect } from "react"
import { View, Button } from "react-native"
import { useIsFocused } from "@react-navigation/native"
import ItemList from "../components/ItemList"
import { getItems, saveItems } from "../utils/storage"
import globalStyles from "../styles/globalStyles"

export default function ListScreen({ navigation }) {
  const [items, setItems] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      loadItems()
    }
  }, [isFocused])

  const loadItems = async () => {
    const savedItems = await getItems()
    setItems(savedItems)
  }

  const handleDeleteItem = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    await saveItems(updatedItems)
  }

  const handleEditItem = (item) => {
    navigation.navigate("AddItem", { 
      item, 
      onSave: (updatedItem) => {
        const updatedItems = items.map((i) =>
          i.id === updatedItem.id ? updatedItem : i
        )
        setItems(updatedItems) 
        saveItems(updatedItems) 
      }
    })
  }
  
  
  

  return (
    <View style={globalStyles.container}>
      <ItemList items={items} onDeleteItem={handleDeleteItem} onEditItem={handleEditItem}/>
      <Button title="Add New Item" onPress={() => navigation.navigate("AddItem")} />
    </View>
  )
}

