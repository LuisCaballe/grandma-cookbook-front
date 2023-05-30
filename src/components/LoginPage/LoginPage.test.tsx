import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test(
      "Then it should show an image with the alternative text 'Illustration of cooking ingredients'"
    );
    const expectedAlternativeText = "Illustration of cooking ingredients";

    renderWithProviders(<LoginPage />);

    const image = screen.getByRole("img", { name: expectedAlternativeText });

    expect(image).toBeInTheDocument();
  });
});
