import Button from "../Button/Button";
import FormStyled from "../shared/FromStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled className="form">
      <div className="form__control">
        <label htmlFor="name" className="form__label">
          Name :
        </label>
        <input id="name" type="text" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="imageUrl" className="form__label">
          Image url :
        </label>
        <input id="imageUrl" type="text" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="difficulty" className="form__label">
          Difficulty :
        </label>
        <select id="difficulty" className="form__input">
          <option>-- Choose difficulty --</option>
          <option>Easy</option>
          <option>Moderate</option>
          <option>Advanced</option>
        </select>
      </div>
      <div className="form__control">
        <label htmlFor="cookingTime" className="form__label">
          Cooking time (minutes) :
        </label>
        <input id="cookingTime" type="number" className="form__input" />
      </div>
      <div className="form__control">
        <label htmlFor="ingredientes" className="form__label">
          Ingredients :
        </label>
        <textarea id="ingredientes" className="form__textarea" />
      </div>
      <div className="form__control">
        <label htmlFor="directions" className="form__label">
          Directions :
        </label>
        <textarea
          id="directions"
          className="form__textarea form__textarea--big"
        />
      </div>
      <Button type="submit" className="form__button" text="Add" />
    </FormStyled>
  );
};

export default Form;
