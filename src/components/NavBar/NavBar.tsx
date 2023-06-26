import { NavLink, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import Button from "../Button/Button";
import { resetRecipesActionCreator } from "../../store/recipe/recipeSlice";

const NavBar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    dispatch(resetRecipesActionCreator());
    navigate("/login");
  };

  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
    <NavBarStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink className="navbar__link" to="/home">
            Home
          </NavLink>
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
