import { Transaction, User } from '../types';
import { getMockUser } from './user';

export const getMockTransaction = (
  id?: string,
  amount?: number,
  transactor?: User,
  category?: string,
  note?: string
): Transaction => ({
  id: id || 'abc-123',
  transactor: transactor || getMockUser(),
  amount: amount || 2.5,
  category: category || 'other',
  note: note || 'mock note',
});
