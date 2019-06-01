import { BudgetPeriod, RefillType, Transaction } from 'data/types';
import { getMockTransaction } from './transaction';
import { getMockUser } from './user';

export const getMockBudgetPeriod = (
  id?: string,
  startingAmount?: number,
  transactions?: Transaction[],
  refillType?: RefillType
): BudgetPeriod => ({
  id: id || 'mock-budget-period',
  startingAmount: startingAmount || 1000,
  transactions: transactions || [
    getMockTransaction('1', 20, getMockUser('user-1', 'User One')),
    getMockTransaction('2', 30, getMockUser('user-2', 'User Two')),
    getMockTransaction('3', 0.5, getMockUser('user-3', 'User Three')),
  ],
  refillType: refillType || RefillType.monthly,
});
