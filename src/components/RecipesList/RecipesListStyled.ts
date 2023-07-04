import styled from "styled-components";

const RecipesListSyled = styled.ul`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 260px;
  row-gap: 30px;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 260px);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 260px);
  }
`;

export default RecipesListSyled;
