import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <img
          src="images/logo.svg"
          alt="Grandma's Cookbook's logo"
          width="200"
          height="63"
        />
      </header>
      {pathname !== "/login" && <NavBar />}
    </>
  );
};

export default Header;
