import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppSelector } from "../../store";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListSyled from "./RecipesListStyled";

const RecipesList = (): React.ReactElement => {
  const recipes = useAppSelector((state) => state.recipe.recipes);
  const { removeRecipe } = useRecipes();

  const removeOnClick = async (recipeId: string) => {
    await removeRecipe(recipeId);
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
