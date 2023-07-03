import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import RecipesPage from "../../pages/RecipesPage/RecipesPage";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'Grandma's Cookbook's logo'", () => {
      const expectedAlternativeText = "Grandma's Cookbook's logo";

      renderWithProviders(wrapWithRouter(<Header />));

      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the logo", () => {
    test("Then it should redirect to the homepage", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Header />,
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

      const homeButton = screen.getByAltText("Grandma's Cookbook's logo");
      await userEvent.click(homeButton);

      expect(router.state.location.pathname).toBe("/home");
    });
  });
});
