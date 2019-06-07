import { User } from './User';

export interface Transaction {
  transactor: User;
  amount: number;
  category: string;
  note: string;
}
