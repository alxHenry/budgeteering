import { Budget } from './Budget';
import { User } from './User';

export interface BudgeteeringState {
  budget: Budget;
  me?: User;
}
