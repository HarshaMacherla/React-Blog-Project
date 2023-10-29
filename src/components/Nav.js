import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li onClick={() => handleNavigation("/")}>Home</li>
        <li onClick={() => handleNavigation("/post")}>Post</li>
        <li onClick={() => handleNavigation("/about")}>About</li>
      </ul>
    </nav>
  );
};

export default Nav;
