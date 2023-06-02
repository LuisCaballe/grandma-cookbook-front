import { useAppSelector } from "../../store";
import RecipesPageStyled from "./RecipesPageStyled";

const RecipesPage = (): React.ReactElement => {
  const userName = useAppSelector((state) => state.user.name);

  return (
    <RecipesPageStyled className="recipes">
      <h1 className="recipes__title">{`${userName}'s recipes`}</h1>
      <p>Here is your list of recipes, enjoy your meal!</p>
    </RecipesPageStyled>
  );
};

export default RecipesPage;
