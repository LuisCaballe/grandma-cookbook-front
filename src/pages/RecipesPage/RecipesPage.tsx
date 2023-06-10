import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRecipesActionCreator } from "../../store/recipe/recipeSlice";
import RecipesPageStyled from "./RecipesPageStyled";
import RecipesList from "../../components/RecipesList/RecipesList";
import useRecipes from "../../hooks/recipes/useRecipes";
import Pagination from "../../components/Pagination/Pagination";

const RecipesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);
  const { getRecipes } = useRecipes();

  useEffect(() => {
    (async () => {
      const recipesList = await getRecipes();

      if (recipesList) {
        dispatch(loadRecipesActionCreator(recipesList));

        const firstImageUrl = recipesList[0].imageUrl;

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = firstImageUrl;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getRecipes]);

  return (
    <RecipesPageStyled className="recipes">
      <h1 className="recipes__title">{`${userName}'s recipes`}</h1>
      <p>Here is your list of recipes, enjoy your meal!</p>
      <RecipesList />
      <Pagination />
    </RecipesPageStyled>
  );
};

export default RecipesPage;
