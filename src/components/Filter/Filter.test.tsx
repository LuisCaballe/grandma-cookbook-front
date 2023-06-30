import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When it is rendered, it should show a select element", () => {
    test("Then it should correctly set default option with the text 'Filter by difficulty'", () => {
      const expectedSelectText = "Filter by difficulty";

      renderWithProviders(<Filter />);
      const defaultOption = screen.getByRole("option", {
        name: expectedSelectText,
      });

      expect(defaultOption).toBeInTheDocument();
    });

    test("Then it should display the correct number of options", () => {
      renderWithProviders(<Filter />);
      const options = screen.getAllByRole("option");

      expect(options.length).toBe(4);
    });
  });
});
