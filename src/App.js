import "./App.css";
import Header from "./layout/header";
import ToDoList from "./layout/hero";
import ToDoForm from "./layout/hero/components/toDoForm";
import { useLocalStorageState } from "./layout/hero/components/LocalStorageState";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useLocalStorageState("tasks", []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const removeToDos = (id) => {
    const filterTodo = toDoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(filterTodo);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput, desc) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: nanoid(), task: userInput, description: desc, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header handleFilter={handleFilter} setSearchTerm={setSearchTerm} />
      <ToDoForm addTask={addTask} />
      <ToDoList
        dataList={toDoList}
        handleToggle={handleToggle}
        searchTerm={searchTerm}
        removeToDos={removeToDos}
      />
    </div>
  );
}

export default App;
