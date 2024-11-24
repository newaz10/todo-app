import { useState } from "react";
import { TodoList } from "./TodoList"; // Import the child component
import { Form } from "./Form";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]); // State to hold the list of tasks

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};
