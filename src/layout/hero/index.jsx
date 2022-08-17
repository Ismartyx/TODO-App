import styles from "./styles.module.css";

const ToDoList = ({ dataList, handleToggle, searchTerm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <ul className={styles.lists}>
      {dataList
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.task.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((todo) => {
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
