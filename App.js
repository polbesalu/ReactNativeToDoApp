import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ListScreen from "./screens/ListScreen"
import AddItemScreen from "./screens/AddItemScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} options={{ title: "Todo List" }} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: "Add New Item" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

