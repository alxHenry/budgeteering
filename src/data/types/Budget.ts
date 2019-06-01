import { BudgetPeriod } from './BudgetPeriod';

export interface Budget {
  id: string;
  periods: BudgetPeriod[];
  refillType: RefillType;
  refillAmount: number;
  nextRefillDate: Date;
}

export enum RefillType {
  daily,
  weekly,
  monthly,
}
