import { BudgetPeriod } from './BudgetPeriod';

export interface Budget {
  id: string;
  periods: BudgetPeriod[];
}
