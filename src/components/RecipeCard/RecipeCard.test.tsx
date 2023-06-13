import { screen } from "@testing-library/react";
import { getRecipeMock } from "../../factories/recipe/recipeFactory";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import RecipeCard from "./RecipeCard";
import { vi } from "vitest";

describe("Given a RecipeCard component", () => {
  const recipeName = "Patatas fritas";
  const mockRecipe = getRecipeMock({ name: recipeName });
  const mockActionOnClick = vi.fn();
  describe("When it receives a 'Patatas fritas' recipe", () => {
    test("Then it should show a card with a heading with the text 'Patatas fritas'", () => {
      renderWithProviders(
        wrapWithRouter(
          <RecipeCard
            recipe={mockRecipe}
            isLazy="lazy"
            actionOnClick={mockActionOnClick}
          />
        )
      );
      const heading = screen.getByRole("heading", {
        level: 2,
        name: recipeName,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives an actionOnClick funtion and the user clicks on the delete button", () => {
    test("Then it should call the actionOnClick that it has received", async () => {
      renderWithProviders(
        wrapWithRouter(
          <RecipeCard
            recipe={mockRecipe}
            isLazy="lazy"
            actionOnClick={mockActionOnClick}
          />
        )
      );
      const button = screen.getByAltText("Delete button");
      await userEvent.click(button);

      expect(mockActionOnClick).toHaveBeenCalled();
    });
  });
});
