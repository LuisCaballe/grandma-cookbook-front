import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <p>
        Organize and relive the flavors of your childhood. Keep your culinary
        heritage alive for generations to come.
      </p>
      <img
        src="images/draw.webp"
        alt="Illustration of cooking ingredients"
        width="260"
        height="135"
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
