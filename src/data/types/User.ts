export interface User {
  id: string;
  name: string;
}

export interface UserWithCredentials extends User {
  accessToken: string;
}
