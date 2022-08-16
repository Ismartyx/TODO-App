import styles from "./styles.module.css";

const ToDoList = ({ dataList, handleToggle }) => {
  const handleClick = (e) => {
    // e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <ul className={styles.lists}>
      {dataList.map((todo) => {
        return (
          <li
            id={todo.id}
            className={
              todo.complete
                ? "line-through text-sky-600 transition duration-300"
                : ""
            }
            onClick={handleClick}
            key={todo.id}
          >
            {todo.task}
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
