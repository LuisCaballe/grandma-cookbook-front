import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Feedback from "../Feedback/Feedback";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const showFeedback = useAppSelector(
    (state) => state.ui.feedbackData.showFeedback
  );

  return (
    <>
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
      {isLoading && <Loader />}
      {showFeedback && <Feedback />}
    </>
  );
};

export default Layout;
