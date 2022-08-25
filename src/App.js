import "./App.css";
import Header from "./layout/header";
import ToDoList from "./layout/hero";
import ToDoForm from "./layout/hero/components/toDoForm";
import { useLocalStorageState } from "./layout/hero/components/LocalStorageState";
import { nanoid } from "nanoid";
import { useCallback, useState } from "react";

function App() {
  const [toDoList, setToDoList] = useLocalStorageState("tasks", []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = useCallback(
    (id) => {
      let mapped = toDoList.map((task) => {
        return task.id === id
          ? { ...task, complete: !task.complete }
          : { ...task };
      });
      setToDoList(mapped);
    },
    [setToDoList, toDoList]
  );

  const removeToDos = useCallback(
    (id) => {
      const filterTodo = toDoList.filter((task) => {
        return task.id !== id;
      });
      setToDoList(filterTodo);
    },
    [setToDoList, toDoList]
  );

  const handleFilter = useCallback(() => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  }, [setToDoList, toDoList]);

  const addTask = (userInput, desc) => {
    setToDoList((previousState) => [
      ...previousState,
      { id: nanoid(), task: userInput, description: desc, complete: false },
    ]);
  };

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <ToDoForm addTask={addTask} />
      <ToDoList
        dataList={toDoList}
        handleToggle={handleToggle}
        searchTerm={searchTerm}
        removeToDos={removeToDos}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
