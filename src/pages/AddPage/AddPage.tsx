import Form from "../../components/Form/Form";
import { useAppDispatch } from "../../store";
import { addRecipeActionCreator } from "../../store/recipe/recipeSlice";
import { RecipeStructure } from "../../store/recipe/types";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const addOnSubmit = (newRecipe: RecipeStructure) => {
    dispatch(addRecipeActionCreator(newRecipe));
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
