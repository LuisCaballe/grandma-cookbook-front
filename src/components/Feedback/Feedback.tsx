import Button from "../Button/Button";
import FeedbackStyled from "./FeedbackStyled";

const Feedback = (): React.ReactElement => {
  return (
    <FeedbackStyled className="feedback">
      <div
        className="feedback__container feedback__container--error"
        aria-label="feedback container"
      >
        <img src="images/error.svg" alt="" />
        <p className="feedback__text">
          {`Oops! There's been an error removing your recipe. Please try again`}
        </p>
        <Button text="Close" className="feedback__button" />
      </div>
    </FeedbackStyled>
  );
};

export default Feedback;
