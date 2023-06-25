import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Chat from "./components/Chat";
import Friend from "./components/Friend";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Main") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (route.name === "Friend") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "DarkMode") {
              iconName = focused
                ? "ellipsis-horizontal"
                : "ellipsis-horizontal-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null,
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Main"
          component={Main}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Friend" component={Friend} />
        <Tab.Screen name="DarkMode" component={DarkMode} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
