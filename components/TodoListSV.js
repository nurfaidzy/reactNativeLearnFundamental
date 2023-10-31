import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function TodoListSV() {
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
    <View>
      <ScrollView>
        {todos.map((todo, index) => (
          <View key={index}>
            <TouchableOpacity>
              <Text style={styles.item}>
                {todo.title} | {todo.completed.toString()}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "pink",
    fontSize: 20,
    fontWeight: "bold",
  },
});
