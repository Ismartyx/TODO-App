import { useState } from "react";
import styles from "./styles.module.css";
import AddItem from "../../header/components/addButt/addButt";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState();
  const [userDesc, setUserDesc] = useState();

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(e.target.taskName.value, userDesc);
    setUserInput("");
    setUserDesc("");
  };

  return (
    <form className={styles.formInput} onSubmit={handleSubmit}>
      <input
        className={styles.taskInput}
        type="text"
        name="taskName"
        value={userInput}
        onChange={({ target: { value } }) => setUserInput(value)}
        placeholder="Add something..."
        autoComplete="off"
        onKeyDown={handleEnter}
        required
      />
      <input
        className={styles.descInput}
        type="text"
        name="taskdescName"
        value={userDesc}
        onChange={(e) => setUserDesc(e.currentTarget.value)}
        placeholder="Add description..."
        autoComplete="off"
      />

      <AddItem disabled={userDesc} />
    </form>
  );
};

export default ToDoForm;
