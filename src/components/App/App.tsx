import { useEffect } from "react";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import useToken from "../../hooks/token/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { UserTokenStructure } from "../../store/types";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");
    if (token) {
      const userData = getTokenData(token);
      const userDataToken = { ...userData, token };
      dispatch(loginUserActionCreator(userDataToken as UserTokenStructure));
    }
  }, [dispatch, getToken, getTokenData]);

  return <Layout />;
};

export default App;
