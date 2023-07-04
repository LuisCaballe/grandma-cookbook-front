import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRecipesActionCreator } from "../../store/recipe/recipeSlice";
import RecipesPageStyled from "./RecipesPageStyled";
import RecipesList from "../../components/RecipesList/RecipesList";
import useRecipes from "../../hooks/recipes/useRecipes";
import Pagination from "../../components/Pagination/Pagination";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import Filter from "../../components/Filter/Filter";

const RecipesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);
  const { recipes: currentRecipes } = useAppSelector((state) => state.recipe);
  let { page, skip } = useAppSelector((state) => state.ui.paginationData);
  const { getRecipes } = useRecipes();
  const [filterValue, setFilterValue] = useState("");

  const nextPage = () => {
    page = page + 1;
    skip = skip + 6;
    dispatch(paginationActionCreator({ page, skip }));
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    page = page - 1;
    skip = skip - 6;
    dispatch(paginationActionCreator({ page, skip }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const recipesState = await getRecipes(skip, filterValue);

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
  }, [dispatch, filterValue, getRecipes, skip]);

  return (
    <RecipesPageStyled className="recipes">
      <h1 className="recipes__title">{`${userName}'s recipes`}</h1>
      <Filter setFilterValue={setFilterValue} filterValue={filterValue} />
      {currentRecipes.length !== 0 ? (
        <>
          <p>Here is your list of recipes, enjoy your meal!</p>
          <RecipesList />
          <Pagination
            nextPageOnClick={nextPage}
            previousPageOnClick={previousPage}
          />
        </>
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
    </RecipesPageStyled>
  );
};

export default RecipesPage;
