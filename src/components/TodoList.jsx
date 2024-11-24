import PropTypes from "prop-types";
import "./TodoList.css";

export const TodoList = ({ todoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todoList, index) => (
        <li key={index} className="todo-item">
          {todoList}
        </li> // Render each task in the list
      ))}
    </ul>
  );
};

// Add prop validation
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.string).isRequired, // tasks must be an array of strings and is required
};
