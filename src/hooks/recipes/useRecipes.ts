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
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          showFeedback: true,
          message: errorMessage,
          isError: true,
        })
      );
    }
  }, [dispatch, request]);

  const removeRecipe = async (
    recipeId: string
  ): Promise<boolean | undefined> => {
    dispatch(showLoadingActionCreator());

    try {
      await axios.delete(`${apiUrl}/recipes/${recipeId}`, request);

      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: "Recipe removed",
          showFeedback: true,
        })
      );
      const isRemoved = true;

      return isRemoved;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          showFeedback: true,
          message:
            "Oops! There's been an error removing your recipe. Please try again",
        })
      );
    }
  };

  return { getRecipes, removeRecipe };
};

export default useRecipes;
