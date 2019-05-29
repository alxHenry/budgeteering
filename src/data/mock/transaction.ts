import { Transaction, User } from '../types';
import { getMockUser } from './user';

export const getMockTransaction = (id?: string, amount?: number, transactor?: User): Transaction => ({
  id: id || 'abc-123',
  amount: amount || 2.5,
  transactor: transactor || getMockUser(),
});
