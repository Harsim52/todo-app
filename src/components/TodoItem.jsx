import React from "react";

export const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="flex flex-wrap overflow-hidden flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-3 rounded-lg border border-gray-300 mt-3">
      <p
        className={`flex-1 break-words mb-2 sm:mb-0 ${
          task.isCompleted ? "line-through text-gray-500" : ""
        }`}
      >
        {task.text}
      </p>
      <div className="flex gap-2">
        <button
          onClick={deleteTask}
          className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-md ml-2"
        >
          Delete
        </button>
        <button
          onClick={toggleComplete}
          className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-md"
        >
          {task.isCompleted ? "Undo" : "Completed"}
        </button>
      </div>
    </div>
  );
};
