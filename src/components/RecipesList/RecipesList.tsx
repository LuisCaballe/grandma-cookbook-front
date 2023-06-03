import { useAppSelector } from "../../store";

const RecipesList = (): React.ReactElement => {
  const recipes = useAppSelector((state) => state.recipe.recipes);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h1>{recipe.name}</h1>
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
