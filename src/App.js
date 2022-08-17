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

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: nanoid(), task: userInput, complete: false }];
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
      />
    </div>
  );
}

export default App;
