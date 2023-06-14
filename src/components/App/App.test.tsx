import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import App from "./App";
import { tokenMock } from "../../mocks/userMocks";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the logo of the app", () => {
      const expectedAltText = "Grandma's Cookbook's logo";

      localStorage.setItem("token", tokenMock);

      renderWithProviders(wrapWithRouter(<App />));

      const headerImage = screen.getByAltText(expectedAltText);

      expect(headerImage).toBeInTheDocument();
    });
  });
});
