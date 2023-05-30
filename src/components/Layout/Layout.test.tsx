import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'Grandma's Cookbook's logo'", () => {
      const expectedAlternativeText = "Grandma's Cookbook's logo";

      renderWithProviders(<Layout />);

      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });
});
