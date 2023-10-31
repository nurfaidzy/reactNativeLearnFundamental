import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function TodoLists() {
  const [todos, setTodos] = useState([
    {
      userId: 1,
      id: 1,
      title: "sample id 1",
      completed: false,
    },
    {
      userId: 2,
      id: 2,
      title: "sample id 2",
      completed: true,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.item}>
              {item.title} | {item.completed.toString()}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  item: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "pink",
    fontSize: 20,
    fontWeight: "bold",
  },
});
