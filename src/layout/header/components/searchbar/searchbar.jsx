const Searchbar = () => {
  return (
    <div>
      <form className="flex items-center">
        <img src="./search.png" alt="search icon" className="h-5 mr-2" />
        <input
          className="mr-5 rounded outline outline-offset-2 outline-1 hover:outline-2"
          type="search"
          placeholder="Search your work"
        />
      </form>
    </div>
  );
};

export default Searchbar;
