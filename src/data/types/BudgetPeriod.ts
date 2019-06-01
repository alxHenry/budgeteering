import { RefillType } from './Budget';
import { Transaction } from './Transaction';

export interface BudgetPeriod {
  id: string;
  transactions: Transaction[];
  startingAmount: number;
  refillType: RefillType;
}
