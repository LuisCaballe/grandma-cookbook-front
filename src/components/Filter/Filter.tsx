import useRecipes from "../../hooks/recipes/useRecipes";
import { useAppDispatch } from "../../store";
import {
  addFilterActionCreator,
  loadRecipesActionCreator,
} from "../../store/recipe/recipeSlice";
import { resetPaginationActionCreator } from "../../store/ui/uiSlice";
import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  const { getRecipes } = useRecipes();
  const dispatch = useAppDispatch();

  const handleOnFilter = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filter = event.target.value;
    dispatch(addFilterActionCreator(filter));

    const recipesState = await getRecipes(0, filter);

    if (recipesState) {
      const { recipes, totalRecipes } = recipesState;
      dispatch(loadRecipesActionCreator({ recipes, totalRecipes }));
      dispatch(resetPaginationActionCreator());
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <FilterStyled className="filter-form" autoComplete="off">
        <div className="filter-form__input-wrapper">
          <select
            onChange={handleOnFilter}
            id="difficulty"
            className="filter-form__input"
            aria-label="filter by difficulty"
          >
            <option value="">Filter by difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </FilterStyled>
    </>
  );
};

export default Filter;
