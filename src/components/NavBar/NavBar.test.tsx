import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { getUserMock } from "../../factories/user/userFactory";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link to 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(wrapWithRouter(<NavBar />));
      const homeButton = screen.getByRole("button", { name: expectedLinkText });

      expect(homeButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on logout button", () => {
    test("Then the logout button should disappear", async () => {
      const userMock = getUserMock({ isLogged: true });
      const routes = [
        {
          path: "/",
          element: <NavBar />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: userMock,
      });
      const logoutButton = screen.getByRole("button", { name: "Logout" });
      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });
});
