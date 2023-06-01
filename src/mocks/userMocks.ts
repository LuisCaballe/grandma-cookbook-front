import { UserDataStructure, UserTokenStructure } from "../store/types";
import { UserDataCredentials } from "../types";

export const mockCurrentState: UserDataStructure = {
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

export const mockExpectedNewState: UserDataStructure = {
  id: "1234",
  name: "Luis",
  token: "mock-token",
  isLogged: true,
};

export const mockUserCredentials: UserDataCredentials = {
  username: "luis",
  password: "luis",
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmYTA3NzVhNjE1Y2Q5ZTMzODhjYTkiLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODU1Mjk4OTQsImV4cCI6MTY4NTk2MTg5NH0.HVVv0abbN6C5vMQrPewvXCqRgKuQXq5CpngyZsigHwI";

export const decodedTokenData: Partial<UserTokenStructure> = {
  id: "646fa0775a615cd9e3388ca9",
  name: "Admin",
};
