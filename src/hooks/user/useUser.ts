import { useAppDispatch } from "../../store";
import { showLoadingActionCreator } from "../../store/ui/uiSlice";
import { UserDataCredentials } from "../../types";
import axios from "axios";

export const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getToken = async (
    userCredentials: UserDataCredentials
  ): Promise<string> => {
    try {
      dispatch(showLoadingActionCreator());

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
