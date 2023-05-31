import { decodedTokenData, tokenMock } from "../../mocks/userMocks";
import useToken from "./useToken";

describe("Given a useToken custom hook with getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the decoded token data", () => {
      const { getTokenData } = useToken();

      const tokenData = getTokenData(tokenMock);

      expect(tokenData).toStrictEqual(decodedTokenData);
    });
  });
});
