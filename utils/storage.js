import AsyncStorage from "@react-native-async-storage/async-storage"

const ITEMS_STORAGE_KEY = "@todo_items"

export const getItems = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : []
  } catch (e) {
    console.error("Failed to load items", e)
    return []
  }
}

export const saveItems = async (items) => {
  try {
    const jsonValue = JSON.stringify(items)
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, jsonValue)
  } catch (e) {
    console.error("Failed to save items", e)
  }
}

