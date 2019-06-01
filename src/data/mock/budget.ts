import { getNextRefillDate } from 'data/utils/budgetPeriod';
import { Budget, RefillType, Transaction } from '../types';
import { getMockBudgetPeriod } from './budgetPeriod';

export const getMockBudget = (
  id?: string,
  transactions?: Transaction[],
  refillType?: RefillType,
  refillAmount?: number
): Budget => {
  const budgetRefillType = refillType || RefillType.monthly;

  return {
    id: id || 'abc-123',
    periods: [getMockBudgetPeriod(), getMockBudgetPeriod()],
    refillType: budgetRefillType,
    refillAmount: refillAmount || 1000,
    nextRefillDate: getNextRefillDate(budgetRefillType),
  };
};
