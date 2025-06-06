import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="mt-6">
      {task.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet!</p>
      ) : (
        task.map((item) => (
          <TodoItem
            key={item.id}
            task={item}
            deleteTask={() => deleteTask(item.id)}
            toggleComplete={() => toggleComplete(item.id)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
