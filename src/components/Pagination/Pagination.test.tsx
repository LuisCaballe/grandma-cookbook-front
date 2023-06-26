import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a Pagination component", () => {
  const mockPageOnClick = vi.fn();
  describe("When it is rendered", () => {
    test("Then it should show a button with an icon of a right arrow in it", () => {
      const expectedAltText = "right arrow";
      renderWithProviders(
        <Pagination
          nextPageOnClick={mockPageOnClick}
          previousPageOnClick={mockPageOnClick}
        />
      );

      const button = screen.getByAltText(expectedAltText);

      expect(button).toBeInTheDocument();
    });
  });
});
