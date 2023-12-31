import { act, screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import RecipesPage from "./RecipesPage";
import { getUserMock } from "../../factories/user/userFactory";
import { server } from "../../mocks/server";
import { filterHandlers, paginationHandlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { mockRecipesList } from "../../mocks/recipeMocks";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a RecipesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'John's recipes'", () => {
      const expectedTitleText = "John's recipes";

      const userMock = getUserMock({ name: "John" });

      renderWithProviders(wrapWithRouter(<RecipesPage />), {
        user: userMock,
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitleText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the next button", () => {
    test("Then the next button should be enabled, on the other hand, the previous button should be disabled", async () => {
      server.resetHandlers(...paginationHandlers);

      renderWithProviders(wrapWithRouter(<RecipesPage />), {
        recipe: {
          recipes: mockRecipesList,
          totalRecipes: mockRecipesList.length,
        },
      });
      const nextButton = screen.getByLabelText("next button");
      const previousButton = screen.getByLabelText("previous button");

      await userEvent.click(nextButton);
      await userEvent.click(previousButton);

      await act(async () => {
        expect(nextButton).toBeEnabled();
        expect(previousButton).toBeDisabled();
      });
    });
  });

  describe("When it is rendered and the user selects 'Easy' on the difficulty filter", () => {
    test("Then it should render only the recipes with 'Easy' difficulty", async () => {
      server.resetHandlers(...filterHandlers);

      const expectedSelectText = "Easy";
      const expectedAriaText = "filter by difficulty";
      const expectedEasyRecipeHeadingText = "Fried egg";
      const expectedModerateRecipeHeadingText = "Boiled egg";

      renderWithProviders(wrapWithRouter(<RecipesPage />), {
        recipe: {
          recipes: mockRecipesList,
          totalRecipes: mockRecipesList.length,
        },
      });

      const easyRecipeHeading = screen.getByRole("heading", {
        level: 2,
        name: expectedEasyRecipeHeadingText,
      });
      const moderateRecipeHeading = screen.getByRole("heading", {
        level: 2,
        name: expectedModerateRecipeHeadingText,
      });

      expect(easyRecipeHeading).toBeInTheDocument();
      expect(moderateRecipeHeading).toBeInTheDocument();

      const selectInput = screen.getByLabelText(expectedAriaText);
      await userEvent.selectOptions(selectInput, expectedSelectText);

      expect(easyRecipeHeading).toBeInTheDocument();
      expect(moderateRecipeHeading).not.toBeInTheDocument();
    });
  });
});
