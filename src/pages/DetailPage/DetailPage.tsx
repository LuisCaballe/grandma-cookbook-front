import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import DetailPageStyled from "./DetailPageStyled";
import useRecipes from "../../hooks/recipes/useRecipes";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSelectedRecipeActionCreator } from "../../store/recipe/recipeSlice";
import { RecipeStructure } from "../../store/recipe/types";

const DetailPage = (): React.ReactElement => {
  const { recipeId } = useParams();
  const { getSelectedRecipe } = useRecipes();
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe.selectedRecipe);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  window.scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      if (isLogged) {
        if (recipeId) {
          const selectedRecipe = await getSelectedRecipe(recipeId);
          dispatch(
            loadSelectedRecipeActionCreator(selectedRecipe as RecipeStructure)
          );

          const firstImageUrl = selectedRecipe?.imageUrl as string;

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
  }, [dispatch, getSelectedRecipe, isLogged, recipeId]);

  return (
    <>
      <DetailPageStyled>
        <h1 className="detail__heading">Recipe details</h1>
        <section className="detail">
          <Button
            className="detail__circle-button"
            icon="images/edit-btn.svg"
            altText="Edit button"
            width="48"
            height="48"
          />
          <img
            className="detail__image"
            src={recipe?.imageUrl}
            alt={`${recipe?.name} recipe`}
            width="260"
            height="280"
          />
          <div className="detail__text-container">
            <h2 className="detail__title">{recipe?.name}</h2>
            <div>
              <span className="detail__text">Difficulty :</span>{" "}
              {recipe?.difficulty}
            </div>
            <div>
              <span className="detail__text">Cooking time :</span>{" "}
              {recipe?.cookingTime} minutes
            </div>
            <div>
              <span className="detail__text">Ingredients :</span>{" "}
              {recipe?.ingredients}
            </div>
            <div>
              <span className="detail__text">Directions :</span>{" "}
              {recipe?.directions}
            </div>
          </div>
        </section>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
