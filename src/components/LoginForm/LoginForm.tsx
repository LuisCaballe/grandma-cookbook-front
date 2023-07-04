import { useState } from "react";
import { UserDataCredentials } from "../../types";
import Button from "../Button/Button";
import FormStyled from "../shared/FromStyled";

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
    <FormStyled className="form" onSubmit={handleSubmit} autoComplete="off">
      <h1 className="form__title">Login</h1>
      <div className="form__control">
        <label htmlFor="username">Username :</label>
        <input
          id="username"
          type="text"
          className="form__input"
          onChange={onChangeData}
          value={userCredentials.username}
        />
      </div>
      <div className="form__control">
        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          className="form__input"
          onChange={onChangeData}
          value={userCredentials.password}
        />
      </div>
      <Button
        type="submit"
        isDisabled={!isEnable}
        className="form__button"
        text="Login"
      />
    </FormStyled>
  );
};

export default LoginForm;
