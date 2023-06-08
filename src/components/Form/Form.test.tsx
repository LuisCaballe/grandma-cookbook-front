import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Form from "./Form";

const labels = [
  "Name :",
  "Image url :",
  "Difficulty :",
  "Cooking time (minutes) :",
  "Ingredients :",
  "Directions :",
];

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    labels.forEach((label) => {
      test(`Then it should show a text field with the label text ${label}`, () => {
        renderWithProviders(<Form buttonText="" />);

        const labelField = screen.getByLabelText(label);

        expect(labelField).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedButtonText = "Add";

      renderWithProviders(<Form buttonText={expectedButtonText} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
