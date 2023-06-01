import { UserDataCredentials } from "../../types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = async (
    userCredentials: UserDataCredentials
  ): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );

      return token;
    } catch (error) {
      throw new Error("Wrong credentials");
    }
  };

  return { getToken };
};

export default useUser;
