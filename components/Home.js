import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomerRegistration from "./components/CustomerRegistration";
import TodoLists from "./components/TodoLists";
import TodoListSV from "./components/TodoListSV";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
      {/* <CustomerRegistration count={count} setCount={setCount} /> */}
      <Text>Hello Word</Text>
      {/* <TodoLists /> */}
      <SearchBox />
      <TodoListSV />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "powderblue",
  },
});
