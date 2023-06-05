import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Feedback from "../Feedback/Feedback";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const message = useAppSelector((state) => state.ui.message);

  return (
    <>
      {message && <Feedback />}
      {isLoading && <Loader />}
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
