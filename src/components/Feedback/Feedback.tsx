import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import FeedbackStyled from "./FeedbackStyled";

const Feedback = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { isError, message } = useAppSelector((state) => state.ui);

  const handleOnClick = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <FeedbackStyled className="feedback">
      <div
        className={`feedback__container feedback__container--${
          isError ? "error" : "success"
        }`}
        aria-label="feedback container"
      >
        <img
          src={`images/${isError ? "error" : "success"}.svg`}
          alt={`${isError ? "error" : "success"} icon`}
          width={`${isError ? "35" : "40"}`}
          height={`${isError ? "35" : "27"}`}
        />
        <span className="feedback__text">{message}</span>
        <Button
          text="Close"
          className="feedback__button"
          actionOnClick={handleOnClick}
        />
      </div>
    </FeedbackStyled>
  );
};

export default Feedback;
