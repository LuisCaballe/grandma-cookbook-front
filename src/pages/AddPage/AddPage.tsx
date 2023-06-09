import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppDispatch } from "../../store";
import { addRecipeActionCreator } from "../../store/recipe/recipeSlice";
import { RecipeStructure } from "../../store/recipe/types";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const addOnSubmit = async (newRecipe: RecipeStructure) => {
    const newRecipeData = await addRecipe(newRecipe);

    if (newRecipeData) {
      dispatch(addRecipeActionCreator(newRecipeData));
      navigate("/home");
    }
  };

  return (
    <AddPageStyled>
      <section className="add">
        <h1 className="add__title">Add recipe</h1>
        <p>
          Fill in the form with your delicious recipe and add it to your
          collection.
        </p>
        <Form buttonText="Add" actionOnSubmit={addOnSubmit} />
      </section>
    </AddPageStyled>
  );
};

export default AddPage;
