import styles from "./styles.module.css";

const AddItem = ({ handleClick }) => {
  return (
    <button type="submit" className={styles.butt} onClick={handleClick}>
      Add
    </button>
  );
};

export default AddItem;
