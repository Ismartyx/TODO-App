import Searchbar from "./components/searchbar/searchbar";
import AddItem from "./components/addButt/addButt";
import styles from "./styles.module.css";

const Header = ({ handleFilter, handleClick }) => {
  return (
    <header className={styles.header}>
      <div className="flex">
        <AddItem handleClick={handleClick} />
        <button className="ml-5" onClick={handleFilter}>
          Clear Completed
        </button>
      </div>
      <h1 className="text-3xl sans-serif text-sky-700 font-medium">
        To-Do List
      </h1>
      <div className={styles.searchAdd}>
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
