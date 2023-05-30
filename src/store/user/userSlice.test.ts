import {
  mockCurrentState,
  mockExpectedNewState,
  mockUserToken,
} from "../../mocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty current user state and a loginUser action with a payload", () => {
    test("Then it should return a new state with a logged user", () => {
      const newUserState = userReducer(
        mockCurrentState,
        loginUserActionCreator(mockUserToken)
      );

      expect(newUserState).toStrictEqual(mockExpectedNewState);
    });
  });
});
