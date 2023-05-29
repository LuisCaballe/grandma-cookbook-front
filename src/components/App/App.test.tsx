import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show an image with an alternative text 'Grandma's Cookbook's logo'", () => {
      const expectedAlternativeText = "Grandma's Cookbook's logo";
      const route: RouteObject[] = [{ path: "/", element: <App /> }];
      const router = createMemoryRouter(route);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );
      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });
});
