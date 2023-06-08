import styled from "styled-components";

const FeedbackStyled = styled.div`
  background-color: ${(props) => props.theme.colors.lightBackground}bb;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

  .feedback {
    &__container {
      width: 170px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 15px;
      gap: 30px;

      &--error {
        background-color: ${(props) => props.theme.colors.primary};
      }

      &--success {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }

    &__text {
      color: ${(props) => props.theme.colors.light};
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 1.625rem;
      text-align: center;
    }

    &__button {
      background-color: ${(props) => props.theme.colors.light};
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
`;

export default FeedbackStyled;
