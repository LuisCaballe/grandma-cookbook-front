import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import RecipesPage from "./RecipesPage";

describe("Given a RecipesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'John's recipes'", () => {
      const expectedTitleText = "John's recipes";

      renderWithProviders(<RecipesPage />, {
        user: { name: "John", id: "1", token: "1", isLogged: true },
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitleText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
