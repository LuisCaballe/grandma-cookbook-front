import { useEffect } from "react";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import useToken from "../../hooks/token/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");
    if (token) {
      const userData = getTokenData(token);
      dispatch(loginUserActionCreator(userData));
    }
  }, [dispatch, getToken, getTokenData]);

  return <Layout />;
};

export default App;
