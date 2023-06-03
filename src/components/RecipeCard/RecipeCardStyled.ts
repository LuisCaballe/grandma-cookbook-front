import styled from "styled-components";

const RecipeCardStyled = styled.article`
  background-color: ${(props) => props.theme.colors.lightBackground};
  width: 260px;
  position: relative;

  .recipe-card {
    &__image {
      border-radius: 10px 10px 0 0;
      object-fit: cover;
    }

    &__text-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    &__title {
      font-size: 2.625rem;
      color: ${(props) => props.theme.colors.primary};
    }

    &__text {
      color: ${(props) => props.theme.colors.primary};
    }

    &__cercle-button {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;

export default RecipeCardStyled;
