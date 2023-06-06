import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should an image with the alternative text 'Illustration of cooking ingredients'", () => {
      const expectedAltText = "Illustration of cooking ingredients";

      renderWithProviders(<NotFoundPage />);
      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
