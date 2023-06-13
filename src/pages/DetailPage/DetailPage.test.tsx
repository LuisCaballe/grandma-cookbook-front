import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import DetailPage from "./DetailPage";

describe("Given a DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Recipe details'", () => {
      const expectedHeadingText = "Recipe details";

      renderWithProviders(<DetailPage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
