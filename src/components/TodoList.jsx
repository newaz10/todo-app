import PropTypes from "prop-types";

export const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li> // Render each task in the list
      ))}
    </ul>
  );
};

// Add prop validation
TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired, // tasks must be an array of strings and is required
};
