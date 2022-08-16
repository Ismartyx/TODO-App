import { useState } from "react";
import styles from "./styles.module.css";

const ToDoForm = ({ addTask, isActive, setIsActive }) => {
  const [userInput, setUserInput] = useState();

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    addTask(userInput);
    setUserInput("");
    setIsActive("invisible");
  };

  return (
    <form className={styles.formInput} onSubmit={handleSubmit}>
      <input
        className={isActive}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
    </form>
  );
};

export default ToDoForm;
