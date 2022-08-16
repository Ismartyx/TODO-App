import { useState } from "react";
import "./App.css";
import Header from "./layout/header";
import ToDoList from "./layout/hero";
import ToDoForm from "./layout/hero/components/toDoForm";
import { useLocalStorageState } from "./layout/hero/components/LocalStorageState";
import { nanoid } from "nanoid";

function App() {
  const [toDoList, setToDoList] = useLocalStorageState("tasks");
  const [isActive, setIsActive] = useState("invisible");

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

  const handleClick = () => {
    setIsActive("visible");
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: nanoid(), task: userInput, complete: false }];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header handleFilter={handleFilter} handleClick={handleClick} />
      <ToDoForm
        addTask={addTask}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <ToDoList dataList={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
