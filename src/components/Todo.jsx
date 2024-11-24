import { useState } from "react";
import { TodoList } from "./TodoList"; // Import the child component

export const Todo = () => {
  const [todo, setTodo] = useState(""); // State to hold the current input value
  const [todoList, setTodoList] = useState([]); // State to hold the list of tasks

  const handleChange = (e) => {
    setTodo(e.target.value); // Update the current input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the default browser behavior for this event
    if (todo.trim()) {
      // Prevent adding empty tasks
      setTodoList((prevList) => [...prevList, todo]); // Add the new task to the list
      setTodo(""); // Clear the input field after submission
    } else {
      alert("Task cannot be empty");
      setTodo(""); // Clear the input field after submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <button type="submit">Add</button>
      </form>

      {/* Print TodoList */}
      <TodoList tasks={todoList} />
    </div>
  );
};
