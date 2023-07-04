import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightBackground};
  border-radius: 10px;

  .pagination {
    &__button {
      display: flex;
      width: 48px;
      height: 48px;
      background-color: rgb(157, 54, 24);
      border-radius: 0px 10px 10px 0px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      :disabled {
        visibility: hidden;
      }

      &--left {
        border-radius: 10px 0px 0px 10px;
      }

      &--right {
        border-radius: 0px 10px 10px 0px;
      }
    }
  }
`;

export default PaginationStyled;
