import { UserTokenData, UserTokenStructure } from "../store/types";
import { UserDataCredentials } from "../types";

export const mockCurrentState: UserTokenData = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const mockUserToken: UserTokenStructure = {
  id: "1234",
  name: "Luis",
  token: "mock-token",
};

export const mockExpectedNewState: UserTokenData = {
  id: "1234",
  name: "Luis",
  token: "mock-token",
  isLogged: true,
};

export const mockUserCredentials: UserDataCredentials = {
  username: "luis",
  password: "luis",
};

export const tokenMock = "mock-token";
