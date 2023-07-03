import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyled";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store";
import { resetPaginationActionCreator } from "../../store/ui/uiSlice";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((state) => state.user);

  const homeOnClick = () => {
    if (isLogged) {
      dispatch(resetPaginationActionCreator());
      navigate("/home");
    }
  };

  return (
    <>
      <HeaderStyled>
        <Button
          actionOnClick={homeOnClick}
          icon="/images/logo.svg"
          altText="Grandma's Cookbook's logo"
          width="200"
          height="63"
        />
      </HeaderStyled>
      {pathname !== "/login" && <NavBar />}
    </>
  );
};

export default Header;
