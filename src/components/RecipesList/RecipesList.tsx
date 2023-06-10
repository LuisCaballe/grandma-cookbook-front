import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeRecipeActionCreator } from "../../store/recipe/recipeSlice";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListSyled from "./RecipesListStyled";

const RecipesList = (): React.ReactElement => {
  const recipes = useAppSelector((state) => state.recipe.recipes);
  const { removeRecipe } = useRecipes();
  const dispatch = useAppDispatch();

  const removeOnClick = async (recipeId: string) => {
    await removeRecipe(recipeId);
    dispatch(removeRecipeActionCreator(recipeId));
  };

  return (
    <RecipesListSyled>
      {recipes.map((recipe, position) => (
        <li key={recipe.id}>
          <RecipeCard
            recipe={recipe}
            isLazy={position === 0 ? "eager" : "lazy"}
            actionOnClick={removeOnClick}
          />
        </li>
      ))}
    </RecipesListSyled>
  );
};

export default RecipesList;
