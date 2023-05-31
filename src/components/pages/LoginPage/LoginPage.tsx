import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/token/useToken";
import useUser from "../../../hooks/user/useUser";
import { useAppDispatch } from "../../../store";
import { loginUserActionCreator } from "../../../store/user/userSlice";
import { UserDataCredentials } from "../../../types";
import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginOnSubmit = async (userCredentials: UserDataCredentials) => {
    const token = await getToken(userCredentials);

    if (token) {
      const userData = getTokenData(token);

      dispatch(loginUserActionCreator(userData));

      navigate("/home", { replace: true });
    }
  };

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
      <LoginForm actionOnSubmit={loginOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
