import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import DetailPage from "./DetailPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { store } from "../../store";
import { vi } from "vitest";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Recipe details'", () => {
      const expectedHeadingText = "Recipe details";

      renderWithProviders(<DetailPage />, {
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
});
