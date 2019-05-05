import { Transaction } from "./Transaction";

export interface Budget {
  id: string;
  transactions: Transaction[];
}
