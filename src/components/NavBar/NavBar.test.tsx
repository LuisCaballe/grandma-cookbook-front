import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link to 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(<NavBar />);

      const homeLink = screen.getByRole("link", { name: expectedLinkText });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
