import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppDispatch } from "../../store";
import { addRecipeActionCreator } from "../../store/recipe/recipeSlice";
import { RecipeStructure } from "../../store/recipe/types";
import AddAndUpdatePageStyled from "../shared/AddAndUpdatePageStyled";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const AddPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const addOnSubmit = async (newRecipe: RecipeStructure) => {
    const newRecipeData = await addRecipe(newRecipe);

    if (newRecipeData) {
      dispatch(addRecipeActionCreator(newRecipeData));
      const page = 1;
      const skip = 0;
      dispatch(paginationActionCreator({ page, skip }));
      window.scrollTo(0, 0);
      navigate("/home");
    }
  };

  return (
    <AddAndUpdatePageStyled>
      <section className="add">
        <h1 className="add__title">Add recipe</h1>
        <p>
          Fill in the form with your delicious recipe and add it to your
          collection.
        </p>
        <Form buttonText="Add" actionOnSubmit={addOnSubmit} />
      </section>
    </AddAndUpdatePageStyled>
  );
};

export default AddPage;
