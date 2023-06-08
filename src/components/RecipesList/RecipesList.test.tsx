import { screen } from "@testing-library/react";
import {
  getRecipeMock,
  getRecipesListMock,
} from "../../factories/recipe/recipeFactory";
import { renderWithProviders } from "../../testUtils/testUtils";
import RecipesList from "./RecipesList";
import userEvent from "@testing-library/user-event";
import { mockRecipesList } from "../../mocks/recipeMocks";

describe("Given a RecipesList component", () => {
  describe("When it is rendered with a list of three recipes", () => {
    test("Then it should show a heading with the first recipe's name", () => {
      const recipesList = getRecipesListMock(3);

      renderWithProviders(<RecipesList />, {
        recipe: { recipes: recipesList },
      });

      const heading = screen.getByRole("heading", {
        name: recipesList[0].name,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a 'Tortilla de patatas' recipe", () => {
    test("Then it should show a heading with the name 'Tortilla de patatas", () => {
      const mockRecipeName = "Tortilla de patatas";
      const mockRecipe = getRecipeMock({ name: mockRecipeName });
      renderWithProviders(<RecipesList />, {
        recipe: { recipes: [mockRecipe] },
      });

      const heading = screen.getByRole("heading", {
        name: mockRecipeName,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of recipes and the user clicks on the delete button of one recipe", () => {
    test("Then it should remove the clicked recipe from the list", async () => {
      renderWithProviders(<RecipesList />, {
        recipe: { recipes: mockRecipesList },
      });

      const recipeHeading = screen.getByRole("heading", {
        level: 2,
        name: mockRecipesList[0].name,
      });

      const deleteButton = screen.getAllByAltText("Delete button");

      await userEvent.click(deleteButton[0]);

      expect(recipeHeading).not.toBeInTheDocument();
    });
  });
});
