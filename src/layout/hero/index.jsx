import styles from "./styles.module.css";
import FloatButt from "./components/floatButt";

const ToDoList = ({ dataList, handleToggle, removeToDos, handleFilter }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  const editIcon = (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="icon" transform="translate(1.000000, 1.000000)">
          <g
            id="edit"
            transform="translate(14.405405, 14.000000) scale(-1, 1) translate(-14.405405, -14.000000) translate(9.000000, 6.000000)"
            fillRule="nonzero"
            fill="#000000"
          >
            <path
              d="M1.45556757,0.473513514 C1.91308108,0.208648649 2.37081081,0.064 2.78032432,0.064 C3.23783784,0.064 3.55113514,0.208432432 3.64735135,0.304864865 L4.2012973,1.19610811 C3.59913514,1.26832432 2.94897297,1.50918919 2.25037838,1.9187027 C1.55178378,2.32821622 1.04605405,2.76172973 0.684756757,3.26745946 L0.179027027,2.40043243 L0.179027027,2.28 C0.179027027,1.91848649 0.419891892,1.05145946 1.45556757,0.473513514 L1.45556757,0.473513514 L1.45556757,0.473513514 Z M6.20021622,12.804973 L1.2387027,4.2307027 C1.45556757,3.77318919 1.9612973,3.24324324 2.75610811,2.6892973 C3.26183784,2.328 3.91221622,2.15935135 4.75524324,2.15935135 L9.71675676,10.7336216 C9.11459459,10.8058378 8.46443243,11.0467027 7.74183784,11.4562162 C7.04324324,11.8655135 6.5132973,12.2992432 6.20021622,12.804973 L6.20021622,12.804973 L6.20021622,12.804973 Z M10.1500541,11.6970811 L10.6317838,15.5507027 L9.95740541,15.936 L6.80237838,13.648 C7.06724324,13.1422703 7.54897297,12.6845405 8.24756757,12.251027 C9.01816216,11.7932973 9.57210811,11.6970811 10.1500541,11.6970811 L10.1500541,11.6970811 Z"
              id="Shape"
            ></path>
          </g>
          <circle id="Oval" stroke="#000000" cx="14" cy="14" r="14"></circle>
        </g>
      </g>
    </svg>
  );

  return (
    <ul className={styles.lists}>
      {dataList.map((todo) => {
        return (
          <li
            id={todo.id}
            className={
              todo.complete
                ? "line-through text-cyan-700 transition duration-300"
                : ""
            }
            style={{
              backgroundColor: `hsl(${
                +203 + "," + 20 + "%," + (60 + 15 * Math.random()) + "%"
              })`,
              transition: `background-color 0.8s ease-in`,
            }}
            onClick={handleClick}
            key={todo.id}
          >
            <div className="grow">
              <h1 className="font-bold text-lg">{todo.task}</h1>
              <h2 className="bg-transparent outline-none mb-4">
                {todo.description}
              </h2>
            </div>
            <div className="flex flex-col">
              <button className="ml-9">{editIcon}</button>
              <button
                type="button"
                className="scale-15"
                onClick={(e) => {
                  removeToDos(todo.id);
                  e.stopPropagation();
                }}
              >
                <span className={styles.trash}>
                  <span></span>
                  <i></i>
                </span>
              </button>
            </div>
          </li>
        );
      })}
      <FloatButt handleFilter={handleFilter} />
    </ul>
  );
};

export default ToDoList;
