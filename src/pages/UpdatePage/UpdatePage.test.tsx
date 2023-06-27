import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import UpdatePage from "./UpdatePage";

describe("Given an UpdatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Update recipe'", () => {
      const expectedHeadingText = "Update recipe";

      renderWithProviders(<UpdatePage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
