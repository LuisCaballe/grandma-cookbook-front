import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="login-form">
      <h1 className="login-form__title">Login</h1>
      <div className="login-form__control">
        <label htmlFor="username">Username :</label>
        <input id="username" type="text" className="login-form__input" />
      </div>
      <div className="login-form__control">
        <label htmlFor="password">Password :</label>
        <input id="password" type="password" className="login-form__input" />
      </div>
      <button className="login-form__button">Login</button>
    </LoginFormStyled>
  );
};

export default LoginForm;
