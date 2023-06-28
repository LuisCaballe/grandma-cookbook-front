const Filter = (): React.ReactElement => {
  return (
    <>
      <form
        className="form form--transparent"
        autoComplete="off"
        onSubmit={() => true}
      >
        <select id="difficulty" className="form__input">
          <option value="">Filter by difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </form>
    </>
  );
};

export default Filter;
