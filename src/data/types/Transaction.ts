import { User } from "./User";

export interface Transaction {
  id: string,
  amount: number;
  transactor: User;
}
