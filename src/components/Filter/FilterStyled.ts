import styled from "styled-components";

const FilterStyled = styled.form`
  .filter-form {
    &__input-wrapper {
      border: 2px solid ${(props) => props.theme.colors.dark};
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
    }

    &__input {
      height: 3rem;
      border-radius: 10px;
      padding: 5px 10px;
      max-width: 350px;
    }
  }
`;

export default FilterStyled;
