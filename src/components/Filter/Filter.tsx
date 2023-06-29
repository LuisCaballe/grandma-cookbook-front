import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  return (
    <>
      <FilterStyled
        className="filter-form"
        autoComplete="off"
        onSubmit={() => true}
      >
        <div className="filter-form__input-wrapper">
          <select id="difficulty" className="filter-form__input">
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
