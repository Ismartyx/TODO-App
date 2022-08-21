import styles from "./styles.module.css";

const AddItem = ({ handleClick, disabled }) => {
  return (
    <button
      type="submit"
      disabled={!disabled}
      className={styles.butt}
      onClick={handleClick}
    >
      Add
    </button>
  );
};

export default AddItem;
