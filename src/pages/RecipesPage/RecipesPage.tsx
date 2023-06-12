import { useEffect, useState } from "react";
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

  const [skip, setSkip] = useState(0);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setSkip(skip + 5);
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - 5);
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const recipesState = await getRecipes(skip);

      if (recipesState) {
        const { recipes, totalRecipes } = recipesState;

        dispatch(loadRecipesActionCreator(recipes));

        setTotalRecipes(totalRecipes);

        if (recipes.length > 0) {
          const firstImageUrl = recipes[0].imageUrl;

          const preconnectElement = await document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = firstImageUrl;

          const parent = document.head;
          const firstChild = document.head.firstChild;
          parent.insertBefore(preconnectElement, firstChild);
        }
      }
    })();
  }, [dispatch, getRecipes, skip]);

  return (
    <RecipesPageStyled className="recipes">
      <h1 className="recipes__title">{`${userName}'s recipes`}</h1>
      <p>Here is your list of recipes, enjoy your meal!</p>
      <RecipesList />
      <Pagination
        nextPageOnClick={nextPage}
        previousPageOnClick={previousPage}
        page={page}
        totalRecipes={totalRecipes}
      />
    </RecipesPageStyled>
  );
};

export default RecipesPage;
