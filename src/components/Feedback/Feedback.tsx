import Button from "../Button/Button";

const Feedback = (): React.ReactElement => {
  return (
    <div className="feedback">
      <div className="feedback__container" aria-label="feedback container">
        <img src="images/error.svg" alt="" />
        <p>
          {`Oops! There's been an error removing your recipe. Please try again`}
        </p>
        <Button text="Close" />
      </div>
    </div>
  );
};

export default Feedback;
