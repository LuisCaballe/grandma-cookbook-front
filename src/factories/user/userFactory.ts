import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { UserDataStructure } from "../../store/types";
import { UserDataCredentials } from "../../types";

const userFactory = Factory.define<UserDataStructure>(() => ({
  name: faker.person.firstName(),
  id: faker.database.mongodbObjectId().toString(),
  token: faker.string.alphanumeric(20),
  isLogged: false,
}));

export const getUserMock = (data?: Partial<UserDataStructure>) => {
  return userFactory.build(data);
};

const credentialsFactory = Factory.define<UserDataCredentials>(() => ({
  username: faker.person.firstName(),
  password: faker.string.alphanumeric(10),
}));

export const getCredentialsMock = (data?: Partial<UserDataCredentials>) => {
  return credentialsFactory.build(data);
};
