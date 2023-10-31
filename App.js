import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import DetailScreen from "./components/screen/DetailScreen";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Details" component={DetailScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({});
