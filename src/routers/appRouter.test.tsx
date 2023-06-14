import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../testUtils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given an appRouter router", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the logo of the app", () => {
      const expectedAltText = "Grandma's Cookbook's logo";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const headerImage = screen.getByAltText(expectedAltText);

      expect(headerImage).toBeInTheDocument();
    });
  });
});
