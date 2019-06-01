import { useActions } from 'data/actions';
import React, { FC, ReactNode, useEffect, useReducer } from 'react';
import budgeteeringReducer, { initialState } from './reducer';
import StoreContext from './StoreContext';

export interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(budgeteeringReducer, initialState);
  const actionCreators = useActions(state, dispatch);

  useEffect(() => {
    console.log({ newState: state });
  }, [state]);

  return <StoreContext.Provider value={{ state, actionCreators }}>{children}</StoreContext.Provider>;
};
