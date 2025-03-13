import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, isCompleted: false };
    setTask([...task, newTask]);
  };

  const deleteTask = (taskId) => {
    setTask(task.filter((task) => task.id !== taskId));
  };
  const toggleComplete = (taskId) => {
    setTask(
      (
        prevTask // Update the todos state
      ) =>
        prevTask.map(
          (
            task //  Loop through each todo item
          ) =>
            task.id === taskId // Check if this is the task we want to update
              ? { ...task, isCompleted: !task.isCompleted } // Toggle `isCompleted`
              : task // Keep other tasks unchanged
        )
    );
  };
  return (
    <>
      <TodoInput addTask={addTask}></TodoInput>
      <TodoList
        task={task}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      ></TodoList>
    </>
  );
}

export default App;
