import { NavLink } from "react-router-dom";

const NavBar = (): React.ReactElement => {
  return (
    <ul>
      <li>
        <NavLink to="/recipes" aria-label="recipes">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-recipe" aria-label="add recipe">
          Add
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" aria-label="logout">
          Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
