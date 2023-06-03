import { useAppSelector } from "../../store";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListSyled from "./RecipesListStyled";

const RecipesList = (): React.ReactElement => {
  const recipes = useAppSelector((state) => state.recipe.recipes);

  return (
    <RecipesListSyled>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </RecipesListSyled>
  );
};

export default RecipesList;
