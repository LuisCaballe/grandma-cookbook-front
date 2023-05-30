export interface UserTokenStructure {
  name: string;
  id: string;
  token: string;
}

export interface UserTokenData extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserDataCredentials {
  username: string;
  password: string;
}
