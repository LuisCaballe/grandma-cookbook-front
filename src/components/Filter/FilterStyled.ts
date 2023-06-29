import styled from "styled-components";

const FilterStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  .filter-form {
    &__input-wrapper {
      border: 2px solid ${(props) => props.theme.colors.dark};
      border-radius: 10px;
      display: flex;
      flex-direction: column;
    }

    &__input {
      height: 3rem;
      border-radius: 10px;
      padding: 5px 10px;
    }
  }
`;

export default FilterStyled;
