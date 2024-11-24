import PropTypes from "prop-types";
import "./TodoList.css";

export const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todoList.map((task, index) => (
        <li key={index} className="todo-item">
          <span>{task}</span>
          <button
            className="delete-button"
            onClick={() => deleteTodo(index)} // Call delete function with the index
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

// Prop validation
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.string).isRequired, // tasks must be an array of strings and is required
  deleteTodo: PropTypes.func.isRequired, // Ensure deleteTodo is a function
};
