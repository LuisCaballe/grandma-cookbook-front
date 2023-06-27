import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppDispatch, useAppSelector } from "../../store";
import { RecipeStructure } from "../../store/recipe/types";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import AddAndUpdatePageStyled from "../shared/AddAndUpdatePageStyled";

const UpdatePage = (): React.ReactElement => {
  const { updateRecipe } = useRecipes();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedRecipe } = useAppSelector((state) => state.recipe);

  const updateOnSubmit = async (updatedRecipeData: RecipeStructure) => {
    await updateRecipe(selectedRecipe?.id as string, updatedRecipeData);
    const page = 1;
    const skip = 0;
    dispatch(paginationActionCreator({ page, skip }));
    window.scrollTo(0, 0);
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
