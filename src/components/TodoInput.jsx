import React, { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!input.trim()) return;
        console.log("hello");
        addTask(input);
        setInput("");
      }}
    > <h2 className="p-2 text-left font-bold text-2xl box-border " >TODO APP</h2>
      <div className="flex box-border gap-1"><input className="p-2 w-3/4 box-border border-1 border-gray-300 rounded-md"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={handleChange}
      />
      <button className=" text-3xl text-white bg-purple-500 w-1/4 box-border rounded-md font-bold flex items-center justify-center font-mono " type="submit">+</button></div>  
    </form>
  );
};

export default TodoInput;
