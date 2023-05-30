import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
}

body {
  margin: 0;
  background-color: ${(props) => props.theme.colors.light};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: ${(props) => props.theme.fonts.secondary};
}

p {
  margin: 0;
  font-family: ${(props) => props.theme.fonts.primary};
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyle;
