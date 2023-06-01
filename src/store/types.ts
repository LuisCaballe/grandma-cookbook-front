export interface UserTokenStructure {
  name: string;
  id: string;
  token: string;
}

export interface UserDataStructure extends UserTokenStructure {
  isLogged: boolean;
}
