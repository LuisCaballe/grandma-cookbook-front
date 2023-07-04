import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 30px;
  min-height: 100vh;
  min-width: 320px;
  max-width: 1200px;

  @media screen and (min-width: 700px) {
    padding: 50px;
  }
`;

export default ContainerStyled;
