import Searchbar from "./components/searchbar/searchbar";
import styles from "./styles.module.css";

const Header = ({ handleFilter }) => {
  return (
    <header className={styles.header}>
      <div className="flex">
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
