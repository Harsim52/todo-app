import React, { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📝 TODO APP</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          className="p-3 flex-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={handleChange}
        />
        <button
          className="bg-purple-500 text-white text-lg px-6 py-3 rounded-md hover:bg-purple-600 transition-all"
          type="submit"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
