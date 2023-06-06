import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      font-size: 1.5rem;
    }

    &__number {
      font-size: 3.3rem;
      font-family: ${(props) => props.theme.fonts.secondary};
      color: ${(props) => props.theme.colors.primary};
    }

    &__image {
      margin-top: 30px;
    }
  }
`;

export default NotFoundPageStyled;
