import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DetailScreen({ route }) {
  return (
    <View>
      <Text>Hello From Detail Screen</Text>
      <Text>{route.params.itemId}</Text>
      <Text>{route.params.otherParams}</Text>
      <TouchableOpacity onPress={() => route.params.otherFunction()}>
        <Text>Saya Hello</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
