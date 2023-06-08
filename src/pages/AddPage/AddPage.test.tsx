import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import AddPage from "./AddPage";

describe("Given an AddPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Add recipe'", () => {
      const expectedTitleText = "Add recipe";

      renderWithProviders(<AddPage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitleText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
