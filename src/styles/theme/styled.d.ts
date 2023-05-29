import "styled-components";

declare module "styled-components" {
  export interface DefaulTheme {
    colors: {
      light: string;
      dark: string;
      primary: string;
      secondary: string;
      lightBackground: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
