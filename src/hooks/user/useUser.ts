import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { UserDataCredentials } from "../../types";
import axios from "axios";

export const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getToken = async (
    userCredentials: UserDataCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );

      return token;
    } catch {
      const errorMessage = "Wrong credentials. Please, try again";
      dispatch(
        showFeedbackActionCreator({
          message: errorMessage,
          isError: true,
        })
      );
      dispatch(hideLoadingActionCreator());
    }
  };

  return { getToken };
};

export default useUser;
