import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { mockUserCredentials, tokenMock } from "../../mocks/userMocks";

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
});
