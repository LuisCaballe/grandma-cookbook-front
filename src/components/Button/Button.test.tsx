import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a text 'Logout'", () => {
    test("Then it should show a button with the text 'Logout'", () => {
      const textButton = "Logout";

      renderWithProviders(<Button text={textButton} />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an image an alternative text 'Delete button'", () => {
    test("Then it should show a button with an icon with the alternative text 'Delete button'", () => {
      const alternativeText = "Delete button";

      renderWithProviders(<Button icon="icon.svg" altText="Delete button" />);
      const image = screen.getByAltText(alternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
