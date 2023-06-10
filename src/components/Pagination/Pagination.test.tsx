import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with an icon of a right arrow in it", () => {
      const expectedAltText = "right arrow";
      renderWithProviders(<Pagination />);

      const button = screen.getByAltText(expectedAltText);

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with an icon of a left arrow in it", () => {
      const expectedAltText = "left arrow";
      renderWithProviders(<Pagination />);

      const button = screen.getByAltText(expectedAltText);

      expect(button).toBeInTheDocument();
    });
  });
});
