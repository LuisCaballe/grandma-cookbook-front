import { NavLink, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderStyled>
        <NavLink to="/home">
          <img
            src="/images/logo.svg"
            alt="Grandma's Cookbook's logo"
            width="200"
            height="63"
          />
        </NavLink>
      </HeaderStyled>
      {pathname !== "/login" && <NavBar />}
    </>
  );
};

export default Header;
