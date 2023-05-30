import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.lightBackground};
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;

  .login-form {
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

export default LoginFormStyled;
