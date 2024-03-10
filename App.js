/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (taskTest) => {
    setTasks([...tasks, taskTest]);
  };
  return (
    <SafeAreaView style={styles.view}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    backgroundColor: "lavender",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
