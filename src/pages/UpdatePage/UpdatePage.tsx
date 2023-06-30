import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppSelector } from "../../store";
import { RecipeStructure } from "../../store/recipe/types";
import AddAndUpdatePageStyled from "../shared/AddAndUpdatePageStyled";

const UpdatePage = (): React.ReactElement => {
  const { updateRecipe } = useRecipes();
  const navigate = useNavigate();
  const { selectedRecipe } = useAppSelector((state) => state.recipe);

  const updateOnSubmit = async (updatedRecipeData: RecipeStructure) => {
    await updateRecipe(selectedRecipe?.id as string, updatedRecipeData);
    navigate("/home");
  };

  return (
    <AddAndUpdatePageStyled>
      <section className="add">
        <h1 className="add__title">Update recipe</h1>
        <p>
          Modify the form with your delicious recipe and add it to your
          collection.
        </p>
        <Form buttonText="Update" actionOnSubmit={updateOnSubmit} />
      </section>
    </AddAndUpdatePageStyled>
  );
};

export default UpdatePage;
