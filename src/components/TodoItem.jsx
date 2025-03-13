import React from "react";
export const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="flex  items-center justify-between border-1 border-gray-400 rounded-md mt-2  ">
      <p style={{ textDecoration: task.isCompleted ? "line-through" : "none" }} className="w-[calc(100%-100px)] break-words text-left p-2 ">
        {task.text}
      </p>
      <button onClick={deleteTask} className="bg-red-400 p-2 rounded-md " >🗑️</button>
      <button onClick={toggleComplete} className="p-2 bg-green-400 rounded-md mr-1" >
        {task.isCompleted ? "Undo" : "✔"} 
      </button>
    </div>
  );
};
