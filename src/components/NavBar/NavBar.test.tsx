import { render, screen } from "@testing-library/react";

import NavBar from "./NavBar";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link to 'home'", () => {
      const expectedLinkText = "home";

      const route: RouteObject[] = [{ path: "/", element: <NavBar /> }];
      const router = createMemoryRouter(route);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const homeLink = screen.getByRole("link", { name: expectedLinkText });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
