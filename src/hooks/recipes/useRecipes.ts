import axios from "axios";
import { RecipeStructure, RecipesState } from "../../store/recipe/types";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";
import { useCallback, useMemo } from "react";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useRecipes = () => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  const request = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getRecipes = useCallback(async (): Promise<
    RecipeStructure[] | undefined
  > => {
    try {
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
  }, [dispatch, request]);

  const removeRecipe = (recipeId: string) => {
    dispatch(showLoadingActionCreator());
    axios.delete(`${apiUrl}/recipes${recipeId}`, request);
  };

  return { getRecipes, removeRecipe };
};

export default useRecipes;
