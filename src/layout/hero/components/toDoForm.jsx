import styles from "./styles.module.css";
import AddItem from "../../header/components/addButt/addButt";

const ToDoForm = ({ addTask }) => {
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
    addTask(e.target.taskName.value, e.target.descTask.value);
    e.target.reset();
  };

  return (
    <form className={styles.formInput} onSubmit={handleSubmit}>
      <input
        className={styles.taskInput}
        type="text"
        name="taskName"
        placeholder="Add something..."
        autoComplete="off"
        onKeyDown={handleEnter}
        required
      />
      <input
        className={styles.descInput}
        type="text"
        name="descTask"
        placeholder="Add description..."
        autoComplete="off"
        required
      />

      <AddItem />
    </form>
  );
};

export default ToDoForm;
