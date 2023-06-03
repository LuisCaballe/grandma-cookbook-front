import { RecipeStructure } from "../../store/recipe/types";

interface RecipeCardProps {
  recipe: RecipeStructure;
}

const RecipeCard = ({ recipe }: RecipeCardProps): React.ReactElement => {
  return (
    <article>
      <div>
        <img
          src={recipe.imageUrl}
          alt={`${recipe.name} recipe`}
          width="260"
          height="280"
        />
      </div>
      <h2>{recipe.name}</h2>
      <span>Difficulty : {recipe.difficulty}</span>
      <span>Cooking time : {recipe.cookingTime} minutes</span>
    </article>
  );
};

export default RecipeCard;
