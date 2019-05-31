import { Transaction } from "./Transaction";

export interface BudgetPeriod {
  id: string;
  transactions: Transaction[];
  total: number;
}
