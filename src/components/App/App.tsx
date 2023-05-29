import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <NavBar />
      </ContainerStyled>
    </>
  );
};

export default App;
