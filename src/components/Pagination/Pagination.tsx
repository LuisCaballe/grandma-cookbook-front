import { useAppSelector } from "../../store";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  nextPageOnClick: () => void;
  previousPageOnClick: () => void;
}

const Pagination = ({
  nextPageOnClick,
  previousPageOnClick,
}: PaginationProps): React.ReactElement => {
  const totalRecipes = useAppSelector((state) => state.recipe.totalRecipes);
  const page = useAppSelector((state) => state.ui.paginationData.page);

  const totalPages = Math.ceil(totalRecipes / 5);

  const isPreviousDisabled = page === 1;

  const isNextDisabled = page === totalPages || totalPages <= 1;

  return (
    <PaginationStyled className="pagination">
      <Button
        icon="./images/left-arrow.svg"
        className="pagination__button pagination__button--left"
        altText="left arrow"
        actionOnClick={previousPageOnClick}
        isDisabled={isPreviousDisabled}
        ariaLabel="previous button"
        width="21"
        height="17"
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
        ariaLabel="next button"
        width="21"
        height="17"
      />
    </PaginationStyled>
  );
};

export default Pagination;
