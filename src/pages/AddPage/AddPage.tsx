import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  return (
    <AddPageStyled>
      <section className="add">
        <h1 className="add__title">Add recipes</h1>
        <p>
          Fill in the form with your delicious recipe and add it to your
          collection.
        </p>
      </section>
    </AddPageStyled>
  );
};

export default AddPage;
