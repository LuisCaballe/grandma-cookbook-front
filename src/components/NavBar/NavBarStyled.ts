import styled from "styled-components";

const NavBarStyled = styled.nav`
  .navbar {
    &__list {
      margin-block: 30px;
      display: flex;
      justify-content: space-between;
    }

    &__link {
      display: flex;
      width: 75px;
      height: 48px;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors.primary};

      .active {
        color: ${(props) => props.theme.colors.dark};
        text-decoration: underline;
      }
    }
  }
`;

export default NavBarStyled;
