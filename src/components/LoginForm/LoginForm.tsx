const LoginForm = (): React.ReactElement => {
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="username">Username :</label>
      <input id="username" type="text" />
      <label htmlFor="password">Password :</label>
      <input id="password" type="password" />
    </form>
  );
};

export default LoginForm;
