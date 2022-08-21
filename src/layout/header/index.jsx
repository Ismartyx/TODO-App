import Searchbar from "./components/searchbar/searchbar";
import styles from "./styles.module.css";

const Header = ({ setSearchTerm }) => {
  return (
    <header className={styles.header}>
      <h1 className="ml-2 text-xl sans-serif text-slate-50 font-bold">ToDo</h1>
      <div className={styles.searchAdd}>
        <Searchbar setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
};

export default Header;
