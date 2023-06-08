import styled from "styled-components";

const FormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.lightBackground};
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;

  .form {
    &__title {
      color: ${(props) => props.theme.colors.primary};
    }

    &__control {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__input {
      height: 3rem;
      border-radius: 10px;
      padding: 5px 10px;
    }

    &__label {
      color: ${(props) => props.theme.colors.primary};
    }

    &__textarea {
      resize: none;
      border-radius: 10px;
      height: 100px;
      padding: 10px 10px;

      &--big {
        height: 300px;
      }
    }

    &__button {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.light};
      border-radius: 10px;
      height: 3rem;

      :disabled {
        color: ${(props) => props.theme.colors.primary};
        background-color: transparent;
        border: 2px solid;
      }
    }
  }
`;

export default FormStyled;
