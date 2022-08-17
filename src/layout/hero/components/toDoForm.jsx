import { useState } from "react";
import styles from "./styles.module.css";
import AddItem from "../../header/components/addButt/addButt";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(e.target.taskName.value);
    setUserInput("");
  };

  return (
    <form className={styles.formInput} onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskName"
        value={userInput}
        onChange={({ target: { value } }) => setUserInput(value)}
        placeholder="Enter task..."
      />
      <AddItem />
    </form>
  );
};

export default ToDoForm;
