import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";

import UpdatePage from "./UpdatePage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import RecipesPage from "../RecipesPage/RecipesPage";
import { mockRecipesList } from "../../mocks/recipeMocks";
import { vi } from "vitest";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given an UpdatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Update recipe'", () => {
      const expectedHeadingText = "Update recipe";

      renderWithProviders(wrapWithRouter(<UpdatePage />));

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user submits the form with valid infromation", () => {
    test("Then it should show a heading with the text 'Admin's recipes'", async () => {
      const expectedHeadingText = "Admin's recipes";
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <UpdatePage />,
        },
        {
          path: "/home",
          element: <RecipesPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: { id: "1", isLogged: true, name: "Admin", token: "1" },
        recipe: {
          recipes: mockRecipesList,
          totalRecipes: mockRecipesList.length,
          selectedRecipe: mockRecipesList[0],
        },
      });

      const button = screen.getByRole("button");

      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
