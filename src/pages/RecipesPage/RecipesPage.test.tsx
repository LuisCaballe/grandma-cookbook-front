import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import RecipesPage from "./RecipesPage";
import { getUserMock } from "../../factories/user/userFactory";

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
});
