import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRecipesActionCreator } from "../../store/recipe/recipeSlice";
import RecipesPageStyled from "./RecipesPageStyled";
import RecipesList from "../../components/RecipesList/RecipesList";
import useRecipes from "../../hooks/recipe/useRecipes";

const RecipesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);
  const { getRecipes } = useRecipes();

  useEffect(() => {
    (async () => {
      const recipesList = await getRecipes();
      dispatch(loadRecipesActionCreator(recipesList));
    })();
  }, [dispatch, getRecipes]);

  return (
    <RecipesPageStyled className="recipes">
      <h1 className="recipes__title">{`${userName}'s recipes`}</h1>
      <p>Here is your list of recipes, enjoy your meal!</p>
      <RecipesList />
    </RecipesPageStyled>
  );
};

export default RecipesPage;
