import styled from "styled-components";

const RecipesPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .recipes {
    &__title {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.primary};
      text-align: center;
      background-color: ${(props) => props.theme.colors.lightBackground};
      padding: 10px 30px;
    }

    &__header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 100px;

      @media screen and (max-width: 550px) {
        flex-direction: column-reverse;
        align-items: initial;
        gap: 30px;
      }
    }

    &__image {
      margin: 0 auto;
      mix-blend-mode: multiply;
    }
  }
`;

export default RecipesPageStyled;
