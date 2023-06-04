import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: ${(props) => props.theme.colors.lightBackground}bb;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    &__container {
      width: 170px;
      height: 170px;
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default LoaderStyled;
