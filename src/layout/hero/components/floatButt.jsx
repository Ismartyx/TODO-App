import styles from "./styles.module.css";

const FloatButt = ({ handleFilter }) => {
  return (
    <div>
      <button className={styles.floatButt} onClick={handleFilter}>
        ×
      </button>
    </div>
  );
};

export default FloatButt;
