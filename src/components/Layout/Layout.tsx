import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <NavBar />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
