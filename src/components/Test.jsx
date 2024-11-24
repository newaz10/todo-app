import { useState } from "react";

export const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //Destructure name and value from the input
    setFormData((prevData) => ({
      ...prevData, // Spread previous data to maintain other fields
      [name]: value, // Update the specific field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the default browser behavior for this event
    console.log(`Name: ${formData.name}, Email: ${formData.email}`);
    setFormData({ name: "", email: "" }); // Reset the form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
