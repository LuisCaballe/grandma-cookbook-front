import NavBar from "../NavBar/NavBar";

const Header = (): React.ReactElement => {
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
      <NavBar />
    </>
  );
};

export default Header;
