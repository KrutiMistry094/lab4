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
    <SafeAreaView>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
