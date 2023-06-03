import { RecipeStructure } from "../../store/recipe/types";
import Button from "../Button/Button";
import RecipeCardStyled from "./RecipeCardStyled";

interface RecipeCardProps {
  recipe: RecipeStructure;
}

const RecipeCard = ({ recipe }: RecipeCardProps): React.ReactElement => {
  return (
    <RecipeCardStyled className="recipe-card">
      <Button
        className="recipe-card__cercle-button"
        icon="images/delete-btn.svg"
        width="48"
        height="48"
      />
      <img
        className="recipe-card__image"
        src={recipe.imageUrl}
        alt={`${recipe.name} recipe`}
        width="260"
        height="280"
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
    </RecipeCardStyled>
  );
};

export default RecipeCard;
