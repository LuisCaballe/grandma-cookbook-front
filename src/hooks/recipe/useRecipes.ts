import axios from "axios";
import { RecipeStructure, RecipesState } from "../../store/recipe/types";
import { useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";

const useRecipes = () => {
  const token = useAppSelector((state) => state.user.token);

  const getRecipes = useCallback(async (): Promise<RecipeStructure[]> => {
    const request = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {
      data: { recipes },
    } = await axios.get<RecipesState>(`${apiUrl}/recipes`, request);
    return recipes;
  }, [token]);

  return { getRecipes };
};

export default useRecipes;
