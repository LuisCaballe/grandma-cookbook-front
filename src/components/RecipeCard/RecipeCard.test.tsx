import { screen } from "@testing-library/react";
import { getRecipeMock } from "../../factories/recipe/recipeFactory";
import { renderWithProviders } from "../../testUtils/testUtils";
import RecipeCard from "./RecipeCard";

describe("Given a RecipeCard component", () => {
  describe("When it receives a 'Patatas fritas' recipe", () => {
    test("Then it should a card with a heading with the text 'Patatas fritas'", () => {
      const recipeName = "Patatas fritas";
      const mockRecipe = getRecipeMock({ name: recipeName });

      renderWithProviders(<RecipeCard recipe={mockRecipe} />);
      const heading = screen.getByRole("heading", {
        level: 2,
        name: recipeName,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
