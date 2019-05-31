import { User } from "./User";

export interface Transaction {
  id: string,
  transactor: User;
  amount: number;
  category: string;
  note: string;
}
