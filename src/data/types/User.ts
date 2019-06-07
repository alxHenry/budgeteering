export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserWithCredentials extends User {
  accessToken: string;
}
