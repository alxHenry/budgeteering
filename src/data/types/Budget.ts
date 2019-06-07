import { BudgetPeriod } from './BudgetPeriod';

export interface Budget {
  id: string;
  periods: BudgetPeriod[];
  refillType: RefillType;
  refillAmount: number;
  nextRefillDate: Date;
  allowedUserIds: string[];
}

export enum RefillType {
  daily = 'DAILY',
  weekly = 'WEEKLY',
  monthly = 'MONTHLY',
}
