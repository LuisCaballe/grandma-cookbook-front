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
      border-bottom: 4px solid transparent;

      &.active {
        color: ${(props) => props.theme.colors.secondary};
        font-weight: 700;
        border-bottom: 4px solid ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

export default NavBarStyled;
