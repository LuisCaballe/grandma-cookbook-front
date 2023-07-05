import { useAppDispatch } from "../../store";
import { addFilterActionCreator } from "../../store/recipe/recipeSlice";
import { resetPaginationActionCreator } from "../../store/ui/uiSlice";
import FilterStyled from "./FilterStyled";

interface FilterProps {
  setFilterValue: (filterValue: string) => void;
  filterValue: string;
}

const Filter = ({
  setFilterValue,
  filterValue,
}: FilterProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleOnFilter = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filter = event.target.value;
    setFilterValue(filter);
    dispatch(addFilterActionCreator(filter));
    dispatch(resetPaginationActionCreator());
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
            defaultValue={filterValue}
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
