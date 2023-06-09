import { useState } from "react";
import { RecipeStructure } from "../../store/recipe/types";
import Button from "../Button/Button";
import FormStyled from "../shared/FromStyled";

interface FormProps {
  buttonText: string;
  actionOnSubmit: (newRecipe: RecipeStructure) => void;
}

const Form = ({
  buttonText,
  actionOnSubmit,
}: FormProps): React.ReactElement => {
  const initialReceivedRecipeData: RecipeStructure = {
    name: "",
    imageUrl: "",
    difficulty: "",
    cookingTime: 0,
    ingredients: "",
    directions: "",
  };

  const [receivedRecipeData, setReceivedRecipeData] = useState(
    initialReceivedRecipeData
  );

  const onChangeData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setReceivedRecipeData({
      ...receivedRecipeData,
      [event.target.id]: event.target.value,
    });
  };

  const isEnable =
    receivedRecipeData.name !== "" &&
    receivedRecipeData.imageUrl !== "" &&
    receivedRecipeData.difficulty !== "" &&
    receivedRecipeData.cookingTime !== 0 &&
    receivedRecipeData.ingredients !== "" &&
    receivedRecipeData.directions !== "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(receivedRecipeData);
    setReceivedRecipeData(initialReceivedRecipeData);
  };

  return (
    <FormStyled className="form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="form__control">
        <label htmlFor="name" className="form__label">
          Name :
        </label>
        <input
          id="name"
          type="text"
          className="form__input"
          onChange={onChangeData}
          value={receivedRecipeData.name}
        />
      </div>
      <div className="form__control">
        <label htmlFor="imageUrl" className="form__label">
          Image url :
        </label>
        <input
          id="imageUrl"
          type="text"
          className="form__input"
          onChange={onChangeData}
          value={receivedRecipeData.imageUrl}
        />
      </div>
      <div className="form__control">
        <label htmlFor="difficulty" className="form__label">
          Difficulty :
        </label>
        <select
          id="difficulty"
          className="form__input"
          onChange={onChangeData}
          value={receivedRecipeData.difficulty}
        >
          <option value="">-- Choose difficulty --</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="form__control">
        <label htmlFor="cookingTime" className="form__label">
          Cooking time (minutes) :
        </label>
        <input
          id="cookingTime"
          type="number"
          className="form__input"
          onChange={onChangeData}
          value={receivedRecipeData.cookingTime || ""}
        />
      </div>
      <div className="form__control">
        <label htmlFor="ingredients" className="form__label">
          Ingredients :
        </label>
        <textarea
          id="ingredients"
          className="form__textarea"
          onChange={onChangeData}
          value={receivedRecipeData.ingredients}
        />
      </div>
      <div className="form__control">
        <label htmlFor="directions" className="form__label">
          Directions :
        </label>
        <textarea
          id="directions"
          className="form__textarea form__textarea--big"
          onChange={onChangeData}
          value={receivedRecipeData.directions}
        />
      </div>
      <Button
        type="submit"
        className="form__button"
        text={buttonText}
        isDisabled={!isEnable}
      />
    </FormStyled>
  );
};

export default Form;
