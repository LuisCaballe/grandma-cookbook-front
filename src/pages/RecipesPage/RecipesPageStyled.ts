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

    &__image {
      margin: 0 auto;
    }
  }
`;

export default RecipesPageStyled;
