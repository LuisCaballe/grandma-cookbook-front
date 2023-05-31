import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderStyled>
        <img
          src="images/logo.svg"
          alt="Grandma's Cookbook's logo"
          width="200"
          height="63"
        />
      </HeaderStyled>
      {pathname !== "/login" && <NavBar />}
    </>
  );
};

export default Header;
