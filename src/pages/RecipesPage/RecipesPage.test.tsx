import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import RecipesPage from "./RecipesPage";
import { getUserMock } from "../../factories/user/userFactory";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";

describe("Given a RecipesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'John's recipes'", () => {
      const expectedTitleText = "John's recipes";

      const userMock = getUserMock({ name: "John" });

      renderWithProviders(<RecipesPage />, {
        user: userMock,
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitleText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the button with the right arrow", () => {
    test("Then it should show the next page", async () => {
      server.resetHandlers(...paginationHandlers);

      renderWithProviders(<RecipesPage />);

      const nextButton = screen.getByLabelText("next button");

      const previousButton = screen.getByLabelText("previous button");

      expect(nextButton).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();

      await userEvent.click(nextButton);
      await userEvent.click(nextButton);

      expect(nextButton).toBeDisabled();
    });
  });
});
