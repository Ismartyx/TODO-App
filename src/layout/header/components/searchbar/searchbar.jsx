import styles from "./styles.module.css";

const Searchbar = ({ setSearchTerm }) => {
  return (
    <div className={styles.flexbox}>
      <form className={styles.searchbar}>
        <div>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search your work"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
