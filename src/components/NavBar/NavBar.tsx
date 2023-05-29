import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink className="navbar__link" to="/recipes" aria-label="recipes">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar__link"
            to="/add-recipe"
            aria-label="add recipe"
          >
            Add
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/logout" aria-label="logout">
            Logout
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
