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
  background-color: ${(props) => props.theme.colors.lightBackground}50;
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

h1 {
  font-size: 1.5rem;
}

p {
  margin: 0;
  line-height: 1.5;
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
  padding: 0;
}

input,
textarea,
select {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  height: 100%;
  max-width: 100%;
}

select {
  background-color: ${(props) => props.theme.colors.light};
  border-right: 10px solid transparent;
  outline: none;
}
`;

export default GlobalStyle;
