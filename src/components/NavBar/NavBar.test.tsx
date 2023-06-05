import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { getUserMock } from "../../factories/user/userFactory";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link to 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(wrapWithRouter(<NavBar />));

      const homeLink = screen.getByRole("link", { name: expectedLinkText });

      expect(homeLink).toBeInTheDocument();
    });

    describe("When it is rendered and the user clicks on logout button", () => {
      test("Then the logout button should disappear", async () => {
        const userMock = getUserMock({ isLogged: true });

        renderWithProviders(wrapWithRouter(<NavBar />), {
          user: userMock,
        });

        const logoutButton = screen.getByRole("button", { name: "Logout" });

        await userEvent.click(logoutButton);

        expect(logoutButton).not.toBeInTheDocument();
      });
    });
  });
});
