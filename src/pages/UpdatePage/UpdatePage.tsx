import Form from "../../components/Form/Form";
import AddAndUpdatePageStyled from "../shared/AddAndUpdatePageStyled";

const UpdatePage = (): React.ReactElement => {
  return (
    <AddAndUpdatePageStyled>
      <section className="add">
        <h1 className="add__title">Update recipe</h1>
        <p>
          Modify the form with your delicious recipe and add it to your
          collection.
        </p>
        <Form buttonText="Update" actionOnSubmit={() => true} />
      </section>
    </AddAndUpdatePageStyled>
  );
};

export default UpdatePage;
