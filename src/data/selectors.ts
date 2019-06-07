import { BudgeteeringState } from './types/state';

export const getBudget = (state: BudgeteeringState) => state.budget;

export const getCurrentPeriod = (state: BudgeteeringState) => {
  if (!state.budget) {
    return null;
  }

  return state.budget.periods[state.budget.periods.length - 1];
};

export const getMe = (state: BudgeteeringState) => state.me;
