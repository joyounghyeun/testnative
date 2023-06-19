import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Friend from "./components/Friend";
import Option from "./components/Option";
import Main from "./components/Main";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Friend" component={Friend} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Option" component={Option} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
