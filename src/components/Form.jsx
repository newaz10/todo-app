import PropTypes from "prop-types";
import { useState } from "react";
import "./Form.css";

export const Form = ({ setTodoList }) => {
  const [todo, setTodo] = useState("");

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
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter your task"
          className="form-input"
        />
        <button type="submit" className="form-button">
          Add
        </button>
      </div>
    </form>
  );
};

// Add prop validation
Form.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.string).isRequired, // Corrected prop name
  setTodoList: PropTypes.func.isRequired, // Ensure setTodoList is a function
};
