import { NavLink, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";

const NavBar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    navigate("/login");
  };

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
          <button className="navbar__link" onClick={logoutOnClick}>
            Logout
          </button>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
