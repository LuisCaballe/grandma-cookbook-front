import { useAppSelector } from "../../store";
import RecipesListSyled from "./RecipesListStyled";

const RecipesList = (): React.ReactElement => {
  const recipes = useAppSelector((state) => state.recipe.recipes);

  return (
    <RecipesListSyled>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h2>{recipe.name}</h2>
        </li>
      ))}
    </RecipesListSyled>
  );
};

export default RecipesList;
