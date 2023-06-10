import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled className="pagination">
      <Button
        icon="./images/left-arrow.svg"
        className="pagination__button pagination__button--left"
        altText="left arrow"
      />
      <Button
        icon="./images/right-arrow.svg"
        className="pagination__button pagination__button--right"
        altText="right arrow"
      />
    </PaginationStyled>
  );
};

export default Pagination;
