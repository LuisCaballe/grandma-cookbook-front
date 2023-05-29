import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show an image with an alternative text 'Grandma's Cookbook's logo'", () => {
      const expectedAlternativeText = "Grandma's Cookbook's logo";
      render(<App />);
      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });
});
