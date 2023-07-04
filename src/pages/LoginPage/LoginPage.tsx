import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/token/useToken";
import useUser from "../../hooks/user/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserDataCredentials } from "../../types";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { UserTokenStructure } from "../../store/types";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = useLocalStorage();

  const loginOnSubmit = async (userCredentials: UserDataCredentials) => {
    const token = await getToken(userCredentials);

    if (token) {
      const userData = getTokenData(token);
      const userDataToken = { ...userData, token };

      dispatch(loginUserActionCreator(userDataToken as UserTokenStructure));

      setToken("token", token);

      navigate("/home");
    }
  };

  return (
    <LoginPageStyled>
      <p>
        Organize and relive the flavors of your childhood. Keep your culinary
        heritage alive for generations to come.
      </p>
      <LoginForm actionOnSubmit={loginOnSubmit} />
      <img src="images/draw.webp" alt="Illustration of cooking ingredients" />
    </LoginPageStyled>
  );
};

export default LoginPage;
