import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function CustomerRegistration(props) {
  return (
    <View>
      <Text>Hello From Customer Registration</Text>
      <Text>You Have Clicked : {props.count}</Text>
      <Button
        title="+"
        onPress={() => {
          props.setCount(props.count + 1);
        }}
      ></Button>
      <Button
        title="-"
        onPress={() => {
          props.setCount(props.count - 1);
        }}
      ></Button>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("say hello")}
      >
        <Text style={styles.textButton}>Banana</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
