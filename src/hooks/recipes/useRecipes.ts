import axios from "axios";
import { RecipeStateResponse, RecipeStructure } from "../../store/recipe/types";
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

  const getRecipes = useCallback(
    async (skip: number): Promise<RecipeStateResponse | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { recipes, totalRecipes },
        } = await axios.get<RecipeStateResponse>(
          `${apiUrl}/recipes?skip=${skip}&limit=5`,
          request
        );

        dispatch(hideLoadingActionCreator());

        return { recipes, totalRecipes };
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
    },
    [dispatch, request]
  );

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
    dispatch(showLoadingActionCreator());

    try {
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

  const getSelectedRecipe = async (
    recipeId: string
  ): Promise<RecipeStructure | undefined> => {
    dispatch(showLoadingActionCreator());

    try {
      const { data } = await axios.get<{ recipeById: RecipeStructure }>(
        `${apiUrl}/recipes/${recipeId}`,
        request
      );
      dispatch(hideLoadingActionCreator());

      return data.recipeById;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          showFeedback: true,
          message:
            "Oops! There's been an error loading the recipe's detail. Please try again",
        })
      );
    }
  };

  return { getRecipes, removeRecipe, addRecipe, getSelectedRecipe };
};

export default useRecipes;
