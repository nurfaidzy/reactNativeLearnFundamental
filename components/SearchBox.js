import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function SearchBox() {
  const [searchText, setSeatchText] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Ionicons name="ios-search" size={32} style={styles.icons} />
        <TextInput
          styles={styles.textInput}
          placeholder="Enter Text Here"
          onChangeText={(text) => setSeatchText(text)}
        ></TextInput>
      </View>
      <Text>{searchText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    height: 30,
    backgroundColor: "white",
  },
  icons: {
    marginTop: 3,
  },
});
