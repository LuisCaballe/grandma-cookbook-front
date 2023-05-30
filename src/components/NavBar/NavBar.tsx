import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink className="navbar__link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/add-recipe">
            Add
          </NavLink>
        </li>
        <li>
          <button className="navbar__link">Logout</button>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
