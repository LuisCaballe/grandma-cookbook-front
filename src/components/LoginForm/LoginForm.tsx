import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserDataCredentials } from "../../types";

interface LoginFormProps {
  actionOnSubmit: (user: UserDataCredentials) => void;
}

const LoginForm = ({ actionOnSubmit }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials: UserDataCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState<UserDataCredentials>(
    initialUserCredentials
  );

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const isEnable =
    userCredentials.username !== "" && userCredentials.password !== "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-form__title">Login</h1>
      <div className="login-form__control">
        <label htmlFor="username">Username :</label>
        <input
          id="username"
          type="text"
          className="login-form__input"
          onChange={onChangeData}
          value={userCredentials.username}
        />
      </div>
      <div className="login-form__control">
        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          className="login-form__input"
          onChange={onChangeData}
          value={userCredentials.password}
        />
      </div>
      <button disabled={!isEnable} className="login-form__button">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
