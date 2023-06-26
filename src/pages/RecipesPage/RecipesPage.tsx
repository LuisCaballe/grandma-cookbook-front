import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRecipesActionCreator } from "../../store/recipe/recipeSlice";
import RecipesPageStyled from "./RecipesPageStyled";
import RecipesList from "../../components/RecipesList/RecipesList";
import useRecipes from "../../hooks/recipes/useRecipes";
import Pagination from "../../components/Pagination/Pagination";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const RecipesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);
  const currentRecipes = useAppSelector((state) => state.recipe.recipes);
  let { page, skip } = useAppSelector((state) => state.ui.paginationData);
  const { getRecipes } = useRecipes();

  const nextPage = () => {
    page = page + 1;
    skip = skip + 5;
    dispatch(paginationActionCreator({ page, skip }));
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    page = page - 1;
    skip = skip - 5;
    dispatch(paginationActionCreator({ page, skip }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const recipesState = await getRecipes(skip);

      if (recipesState) {
        const { recipes, totalRecipes } = recipesState;

        dispatch(loadRecipesActionCreator({ recipes, totalRecipes }));

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

      {currentRecipes.length !== 0 ? (
        <p>Here is your list of recipes, enjoy your meal!</p>
      ) : (
        <>
          <p>
            Unfortunately, there are no recipes in your collection, try to add
            some and enjoy your meal!
          </p>
          <img
            src="images/draw.webp"
            alt="Illustration of cooking ingredients"
            width="260"
            height="135"
            className="recipes__image"
          />
        </>
      )}
      <RecipesList />
      {currentRecipes.length !== 0 && (
        <Pagination
          nextPageOnClick={nextPage}
          previousPageOnClick={previousPage}
        />
      )}
    </RecipesPageStyled>
  );
};

export default RecipesPage;
