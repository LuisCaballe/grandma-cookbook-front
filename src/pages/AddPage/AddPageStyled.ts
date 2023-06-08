import styled from "styled-components";

const AddPageStyled = styled.main`
  .add {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__title {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.primary};
      text-align: center;
      background-color: ${(props) => props.theme.colors.lightBackground};
      padding: 10px 30px;
    }
  }
`;

export default AddPageStyled;
