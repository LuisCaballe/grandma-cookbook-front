import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { getUserMock } from "../../factories/user/userFactory";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RecipesPage from "../../pages/RecipesPage/RecipesPage";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link to 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(wrapWithRouter(<NavBar />));
      const homeButton = screen.getByRole("button", { name: expectedLinkText });

      expect(homeButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the 'logout' button", () => {
    test("Then the logout button should disappear", async () => {
      const userMock = getUserMock({ isLogged: true });
      const routes = [
        {
          path: "/",
          element: <NavBar />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: userMock,
      });
      const logoutButton = screen.getByRole("button", { name: "Logout" });
      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the 'home' button", () => {
    test("Then it should redirect to the home page", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <NavBar />,
        },
        {
          path: "/home",
          element: <RecipesPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: { id: "1", isLogged: true, name: "Admin", token: "1234" },
      });

      const homeButton = screen.getByRole("button", { name: "Home" });
      await userEvent.click(homeButton);

      expect(router.state.location.pathname).toBe("/home");
    });
  });

  describe("When it is rendered in the home page", () => {
    test("Then it should show the 'home' button as active", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <NavBar />,
        },
        {
          path: "/home",
          element: <NavBar />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: { id: "1", isLogged: true, name: "Admin", token: "1234" },
      });

      const homeButton = screen.getByRole("button", { name: "Home" });
      await userEvent.click(homeButton);

      const homeButtonRoots = document.getElementsByClassName("active");
      const style = window.getComputedStyle(homeButtonRoots[0]);

      expect(style.fontWeight).toBe("700");
    });
  });
});
