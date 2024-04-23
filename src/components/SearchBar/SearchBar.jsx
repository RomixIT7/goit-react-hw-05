import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

const notify = () => {
  toast("You must enter text, if you want to search movies", {
    duration: 3000,
    position: "top-right",
  });
};

const SearchBar = ({ setSearchParams }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.search.value.trim();
    if (!query) {
      notify();
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundImage: "linear-gradient(darkgreen, green)",
            color: "white",
            fontSize: "24px",
            textAlign: "center",
          },
        }}
      />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
