import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div>
      {task.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task.id)}
          toggleComplete={() => toggleComplete(task.id)}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
