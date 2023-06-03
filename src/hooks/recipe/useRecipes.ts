import axios from "axios";
import { RecipeStructure, RecipesState } from "../../store/recipe/types";
import { useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";

const useRecipes = () => {
  const token = useAppSelector((state) => state.user.token);

  const request = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getRecipes = async (): Promise<RecipeStructure[]> => {
    const {
      data: { recipes },
    } = await axios.get<RecipesState>(`${apiUrl}/recipes`, request);
    return recipes;
  };

  return { getRecipes };
};

export default useRecipes;
