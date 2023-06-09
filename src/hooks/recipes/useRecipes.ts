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
import { removeRecipeActionCreator } from "../../store/recipe/recipeSlice";

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

  const removeRecipe = async (recipeId: string): Promise<void> => {
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

      dispatch(removeRecipeActionCreator(recipeId));
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

  const addRecipe = async (
    newRecipe: RecipeStructure
  ): Promise<RecipeStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const { data } = await axios.post<{ recipe: RecipeStructure }>(
        `${apiUrl}/recipes/add`,
        newRecipe,
        request
      );
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          showFeedback: true,
          message: "Recipe added",
        })
      );

      return data.recipe;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          showFeedback: true,
          message:
            "Oops! There's been an error adding your recipe. Please try again",
        })
      );
    }
  };

  return { getRecipes, removeRecipe, addRecipe };
};

export default useRecipes;
