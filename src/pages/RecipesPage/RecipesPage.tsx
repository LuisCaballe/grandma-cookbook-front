import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRecipesActionCreator } from "../../store/recipe/recipeSlice";
import RecipesPageStyled from "./RecipesPageStyled";
import { getRecipesListMock } from "../../factories/recipe/recipeFactory";
import RecipesList from "../../components/RecipesList/REcipesList";

const mockRecipesList = getRecipesListMock(4);

const RecipesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);

  useEffect(() => {
    dispatch(loadRecipesActionCreator(mockRecipesList));
  });

  return (
    <RecipesPageStyled className="recipes">
      <h1 className="recipes__title">{`${userName}'s recipes`}</h1>
      <p>Here is your list of recipes, enjoy your meal!</p>
      <RecipesList />
    </RecipesPageStyled>
  );
};

export default RecipesPage;
