import { useState } from "react";
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
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <TodoInput addTask={addTask} />
        <TodoList
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
