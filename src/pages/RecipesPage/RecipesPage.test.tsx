import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import RecipesPage from "./RecipesPage";
import { getUserMock } from "../../factories/user/userFactory";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Given a RecipesPage page", () => {
  window.scrollTo = vi.fn().mockImplementation(() => ({}));

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

  describe("When it is rendered and the user clicks on the next button", () => {
    test("Then the next button should be enabled", async () => {
      server.resetHandlers(...paginationHandlers);

      renderWithProviders(<RecipesPage />);

      const nextButton = screen.getByLabelText("next button");
      await userEvent.click(nextButton);

      waitFor(() => {
        expect(nextButton).toBeEnabled();
      });
    });
  });

  describe("When it is rendered and the user clicks on the next button and after that on the previous button", () => {
    test("Then the previous button should be enabled", async () => {
      server.resetHandlers(...paginationHandlers);

      renderWithProviders(<RecipesPage />);
      const nextButton = screen.getByLabelText("next button");
      await userEvent.click(nextButton);

      const previousButton = screen.getByLabelText("previous button");
      await userEvent.click(previousButton);

      waitFor(() => {
        expect(previousButton).toBeEnabled();
      });
    });
  });
});
