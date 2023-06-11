import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  nextPageOnClick: () => void;
  previousPageOnClick: () => void;
  page: number;
  totalRecipes: number;
  limit: number;
}

const Pagination = ({
  nextPageOnClick,
  previousPageOnClick,
  page,
  totalRecipes,
  limit,
}: PaginationProps): React.ReactElement => {
  const totalPages = Math.ceil(totalRecipes / limit);

  const isPreviousDisabled = page === 1;

  const isNextDisabled = page === totalPages;

  return (
    <PaginationStyled className="pagination">
      <Button
        icon="./images/left-arrow.svg"
        className="pagination__button pagination__button--left"
        altText="left arrow"
        actionOnClick={previousPageOnClick}
        isDisabled={isPreviousDisabled}
      />
      <span>
        {page} / {totalPages}
      </span>
      <Button
        icon="./images/right-arrow.svg"
        className="pagination__button pagination__button--right"
        altText="right arrow"
        actionOnClick={nextPageOnClick}
        isDisabled={isNextDisabled}
      />
    </PaginationStyled>
  );
};

export default Pagination;
