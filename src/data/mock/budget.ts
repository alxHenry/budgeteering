import { Budget, Transaction } from '../types';
import { getMockBudgetPeriod } from './budgetPeriod';

export const getMockBudget = (id?: string, transactions?: Transaction[]): Budget => ({
  id: id || 'abc-123',
  periods: [getMockBudgetPeriod(), getMockBudgetPeriod()],
});
