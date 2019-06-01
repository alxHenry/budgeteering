import { BudgeteeringAction } from '../actions';
import { getMockBudget } from '../mock/budget';
import { BudgeteeringState } from '../types/state';

export const initialState: BudgeteeringState = {
  budget: getMockBudget(),
};

const reducer = (state: BudgeteeringState = initialState, action: BudgeteeringAction) => {
  switch (action.type) {
    case 'TRANSACTION.ADD':
      if (!state.budget.periods.length) {
        return state;
      }

      const currentPeriod = state.budget.periods.slice(-1)[0];
      const previousPeriods = state.budget.periods.slice(0, -1);
      const updatedTransactions = [...currentPeriod.transactions, action.payload.transaction];
      const updatedCurrentPeriod = {
        ...currentPeriod,
        transactions: updatedTransactions,
      };
      const updatedPeriods = [...previousPeriods, updatedCurrentPeriod];

      return {
        ...state,
        budget: {
          ...state.budget,
          periods: updatedPeriods,
        },
      };
    default:
      return state;
  }
};

export default reducer;
