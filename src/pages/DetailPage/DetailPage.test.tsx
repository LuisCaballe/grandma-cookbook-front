import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import DetailPage from "./DetailPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { store } from "../../store";
import { vi } from "vitest";
import { mockRecipesList } from "../../mocks/recipeMocks";
import UpdatePage from "../UpdatePage/UpdatePage";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Recipe details'", () => {
      const expectedHeadingText = "Recipe details";

      renderWithProviders(wrapWithRouter(<DetailPage />), {
        user: { isLogged: true, id: "", name: "", token: "" },
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a recipe id", () => {
    test("Then it should show a detail page with a heading with the recipe's name", async () => {
      const route: RouteObject[] = [
        {
          path: "/:recipeId",
          element: <DetailPage />,
        },
      ];

      const recipeId = store.getState().recipe.selectedRecipe?.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/${recipeId}`],
      });

      renderWithProviders(<RouterProvider router={router} />, {
        user: { isLogged: true, id: "", name: "", token: "" },
      });

      const recipeName = store.getState().recipe.selectedRecipe?.name;

      const headingText = await waitFor(() =>
        screen.getByRole("heading", { level: 2, name: recipeName })
      );

      expect(headingText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the edit button", () => {
    test("Then it should redirect the user to the update page with the a heading text 'Update recipe'", async () => {
      const route: RouteObject[] = [
        {
          path: "/:recipeId",
          element: <DetailPage />,
        },
        {
          path: "/update/647100635a615cd9e3388cab",
          element: <UpdatePage />,
        },
      ];

      const recipeId = store.getState().recipe.selectedRecipe?.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/${recipeId}`],
      });

      const expectedButtonAltText = "Edit button";
      renderWithProviders(<RouterProvider router={router} />, {
        recipe: {
          recipes: mockRecipesList,
          totalRecipes: mockRecipesList.length,
          selectedRecipe: mockRecipesList[0],
        },
      });

      const editButton = screen.getByRole("button", {
        name: expectedButtonAltText,
      });

      expect(editButton).toBeInTheDocument();
      await userEvent.click(editButton);

      const expectedHeadingText = "Update recipe";

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
