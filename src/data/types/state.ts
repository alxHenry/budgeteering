import { Budget } from './Budget';
import { UserWithCredentials } from './User';

export interface BudgeteeringState {
  budget: Budget;
  me?: UserWithCredentials;
}
