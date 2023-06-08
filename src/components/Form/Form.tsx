import Button from "../Button/Button";

const Form = (): React.ReactElement => {
  return (
    <form className="form">
      <div className="form__control">
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="imageUrl">Image url :</label>
        <input id="imageUrl" type="text" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="difficulty">Difficulty :</label>
        <select id="difficulty" className="form__input">
          <option>--Choose difficulty--</option>
          <option>Easy</option>
          <option>Moderate</option>
          <option>Advanced</option>
        </select>
      </div>
      <div className="form__control">
        <label htmlFor="cookingTime">Cooking time (minutes) :</label>
        <input id="cookingTime" type="number" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="ingredientes">Ingredients :</label>
        <textarea id="ingredientes" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="directions">Directions :</label>
        <textarea id="directions" className="form__input" />
      </div>
      <Button type="submit" className="form__button" text="Add" />
    </form>
  );
};

export default Form;
