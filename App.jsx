import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./components/Chat";
import Login from "./components/Login";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chat" component={Chat} options={{ title: "Chat" }} />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
