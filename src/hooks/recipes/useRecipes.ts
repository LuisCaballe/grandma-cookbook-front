import axios from "axios";
import { RecipeStructure, RecipesState } from "../../store/recipe/types";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
} from "../../store/ui/uiSlice";

const useRecipes = () => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  const getRecipes = useCallback(async (): Promise<
    RecipeStructure[] | undefined
  > => {
    try {
      const request = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const {
        data: { recipes },
      } = await axios.get<RecipesState>(`${apiUrl}/recipes`, request);

      dispatch(hideLoadingActionCreator());

      return recipes;
    } catch (error) {
      const errorMessage = "Recipes couldn't be load. Please, try again";
      dispatch(
        showFeedbackActionCreator({
          message: errorMessage,
          isError: true,
        })
      );
      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch, token]);

  return { getRecipes };
};

export default useRecipes;
