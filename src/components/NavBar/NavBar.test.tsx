import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { renderWithProviders } from "../../testUtils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link to 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(<NavBar />);

      const homeLink = screen.getByRole("link", { name: expectedLinkText });

      expect(homeLink).toBeInTheDocument();
    });
  });

  describe("When the user clicks on 'Logout' button", () => {
    test("Then it should redirect the user to the login page", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <NavBar />,
        },
      ];
      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );
      const logoutButton = screen.getByRole("button", { name: "Logout" });
      await userEvent.click(logoutButton);

      expect(router.state.location.pathname).toBe("/login");
    });
  });
});
