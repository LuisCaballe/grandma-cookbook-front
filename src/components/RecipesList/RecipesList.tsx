import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadRecipesActionCreator,
  removeRecipeActionCreator,
} from "../../store/recipe/recipeSlice";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListSyled from "./RecipesListStyled";

const RecipesList = (): React.ReactElement => {
  const recipes = useAppSelector((state) => state.recipe.recipes);
  let { page, skip } = useAppSelector((state) => state.ui.paginationData);
  const { removeRecipe, getRecipes } = useRecipes();
  const dispatch = useAppDispatch();

  const removeOnClick = async (recipeId: string) => {
    await removeRecipe(recipeId);
    dispatch(removeRecipeActionCreator(recipeId));

    const recipesData = await getRecipes(skip);

    if (recipesData) {
      dispatch(loadRecipesActionCreator(recipesData));
      const { recipes, totalRecipes } = recipesData;
      if (recipes.length === 0 && totalRecipes > 1) {
        skip -= 5;
        page -= 1;
        const recipesData = await getRecipes(skip);
        if (recipesData) {
          dispatch(loadRecipesActionCreator(recipesData));
          dispatch(paginationActionCreator({ page, skip }));
        }
      }
      dispatch(paginationActionCreator({ page, skip }));
    }
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
