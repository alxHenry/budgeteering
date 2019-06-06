import { BudgeteeringAction } from '../actions';
import { BudgeteeringState } from '../types/state';

export const initialState: BudgeteeringState = {};

const reducer = (state: BudgeteeringState = initialState, action: BudgeteeringAction) => {
  switch (action.type) {
    case 'TRANSACTION.ADD':
      if (!state.budget || !state.budget.periods.length) {
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
    case 'CURRENT_USER.LOADED':
      return {
        ...state,
        me: action.payload.user,
      };
    case 'BUDGET.LOADED':
      return {
        ...state,
        budget: action.payload.budget,
      };
    default:
      return state;
  }
};

export default reducer;
