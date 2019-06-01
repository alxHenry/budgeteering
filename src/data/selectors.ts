import { BudgeteeringState } from './types/state';

export const getBudget = (state: BudgeteeringState) => state.budget;

export const getCurrentPeriod = (state: BudgeteeringState) => state.budget.periods[state.budget.periods.length - 1];
