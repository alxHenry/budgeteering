import { User } from "./User";

export interface Transaction {
  amount: number;
  transactor: User;
}
