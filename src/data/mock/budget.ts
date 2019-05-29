import { Budget, Transaction } from '../types';
import { getMockTransaction } from './transaction';
import { getMockUser } from './user';

export const getMockBudget = (id?: string, transactions?: Transaction[]): Budget => ({
  id: id || 'abc-123',
  transactions: transactions || [
    getMockTransaction('1', 1, getMockUser('user-1', 'User One')),
    getMockTransaction('2', 2, getMockUser('user-2', 'User Two')),
    getMockTransaction('3', 3, getMockUser('user-3', 'User Three')),
  ],
});
