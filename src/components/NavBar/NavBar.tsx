import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import Button from "../Button/Button";
import { resetRecipesActionCreator } from "../../store/recipe/recipeSlice";
import { resetPaginationActionCreator } from "../../store/ui/uiSlice";

const NavBar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    dispatch(resetRecipesActionCreator());
    dispatch(resetPaginationActionCreator());
    navigate("/login");
  };

  const homeOnClick = () => {
    dispatch(resetPaginationActionCreator());
    navigate("/home");
  };

  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
    <NavBarStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <Button
            className={`navbar__link ${
              location.pathname === "/home" ? "active" : ""
            }`}
            actionOnClick={homeOnClick}
            text="Home"
          />
        </li>
        <li>
          <NavLink className="navbar__link" to="/add">
            Add
          </NavLink>
        </li>
        {isLogged && (
          <li>
            <Button
              className="navbar__link"
              actionOnClick={logoutOnClick}
              text="Logout"
            />
          </li>
        )}
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
