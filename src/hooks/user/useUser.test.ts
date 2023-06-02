import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { mockUserCredentials, tokenMock } from "../../mocks/userMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useUser custom hook", () => {
  describe("When it calls the function getToken with a valid username and a password", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser());

      const token = await getToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });

  describe("When it calls the function getToken with a wrong username and a wrong password", () => {
    test("Then it should return the response's method status with a '401' status code", () => {
      server.resetHandlers(...errorHandlers);
      const expectedErrorMessage = "Wrong credentials";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser());

      const getTokenFunction = getToken(mockUserCredentials);

      expect(getTokenFunction).rejects.toThrowError(expectedErrorMessage);
    });
  });
});
