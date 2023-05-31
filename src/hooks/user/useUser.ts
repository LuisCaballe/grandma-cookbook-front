import { UserDataCredentials } from "../../types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = async (
    userCredentials: UserDataCredentials
  ): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(
      `${apiUrl}/user/login`,
      userCredentials
    );

    return token;
  };

  return { getToken };
};

export default useUser;
