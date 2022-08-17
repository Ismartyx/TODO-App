import styles from "./styles.module.css";

const AddItem = ({ handleClick, disabled }) => {
  return (
    <div className="flex ml-2">
      <button
        disabled={!disabled}
        className={styles.butt}
        onClick={handleClick}
      >
        <img className="h-10" src="./plus.png" alt="plus button" />
      </button>
    </div>
  );
};

export default AddItem;
