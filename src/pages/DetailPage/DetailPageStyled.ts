import styled from "styled-components";

const DetailPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;

  .detail {
    &__heading {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.primary};
      text-align: center;
      background-color: ${(props) => props.theme.colors.lightBackground};
      padding: 10px 30px;
    }
  }

  .detail {
    width: 260px;
    position: relative;
    background-color: ${(props) => props.theme.colors.lightBackground};
    margin: 0 auto;

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

    &__circle-button {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;

export default DetailPageStyled;
