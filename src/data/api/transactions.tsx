import { Transaction } from 'data/types';

export interface DraftTransaction {
  amount: Transaction['amount'];
  transactor: Transaction['transactor'];
  category: Transaction['category'];
  note: Transaction['note'];
}
