import styles from "./styles.module.css";

const AddItem = ({ handleClick }) => {
  return (
    <div className="flex">
      <button className={styles.butt} onClick={handleClick}>
        <img className="h-10" src="./plus.png" alt="plus button" />
      </button>
    </div>
  );
};

export default AddItem;
