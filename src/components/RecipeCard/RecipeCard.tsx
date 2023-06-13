import { Link } from "react-router-dom";
import { RecipeStructure } from "../../store/recipe/types";
import Button from "../Button/Button";
import RecipeCardStyled from "./RecipeCardStyled";

interface RecipeCardProps {
  recipe: RecipeStructure;
  isLazy: "eager" | "lazy";
  actionOnClick: (recipeId: string) => void;
}

const RecipeCard = ({
  recipe,
  isLazy,
  actionOnClick,
}: RecipeCardProps): React.ReactElement => {
  return (
    <RecipeCardStyled className="recipe-card">
      <Button
        className="recipe-card__circle-button"
        icon="images/delete-btn.svg"
        altText="Delete button"
        width="48"
        height="48"
        actionOnClick={() => actionOnClick(recipe.id as string)}
      />
      <Link to={`/${recipe.id}`}>
        <img
          className="recipe-card__image"
          src={recipe.imageUrl}
          alt={`${recipe.name} recipe`}
          width="260"
          height="280"
          loading={isLazy}
        />
        <div className="recipe-card__text-container">
          <h2 className="recipe-card__title">{recipe.name}</h2>
          <div>
            <span className="recipe-card__text">Difficulty :</span>{" "}
            {recipe.difficulty}
          </div>
          <div>
            <span className="recipe-card__text">Cooking time :</span>{" "}
            {recipe.cookingTime} minutes
          </div>
        </div>
      </Link>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
