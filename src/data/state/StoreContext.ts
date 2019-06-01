import { BudgeteeringActionCreators } from 'data/actions';
import { BudgeteeringState } from 'data/types/state';
import { createContext } from 'react';
import { initialState } from './reducer';

const StoreContext = createContext<{
  state: BudgeteeringState;
  actionCreators: BudgeteeringActionCreators;
}>({ state: initialState, actionCreators: {} as BudgeteeringActionCreators });

export default StoreContext;
