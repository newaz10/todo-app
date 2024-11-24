import { useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
