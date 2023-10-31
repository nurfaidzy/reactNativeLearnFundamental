import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TodoListSV from "./TodoListSV";
import SearchBox from "./SearchBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hello Word</Text>
      <SearchBox />
      <TodoListSV />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 70,
            otherParams: "BlogPost",
            otherFunction: () => {
              alert("Hello Word");
            },
          })
        }
      >
        <Text>Move to Detail Screen </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "powderblue",
  },
});
