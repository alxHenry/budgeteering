import { Dispatch } from 'react';
import { Transaction, UserWithCredentials } from './types';
import { BudgeteeringState } from './types/state';

export type BudgeteeringAction = AddTransactionAction | CurrentUserLoaded;

export enum ActionTypes {
  TransactionAdd = 'TRANSACTION.ADD',
  CurrentUserLoaded = 'CURRENT_USER.LOADED',
}

export interface BudgeteeringActionCreators {
  addTransaction(transaction: Transaction): void;
  currentUserLoaded(user: UserWithCredentials): void;
}

export interface AddTransactionAction {
  type: ActionTypes.TransactionAdd;
  payload: {
    transaction: Transaction;
  };
}

export interface CurrentUserLoaded {
  type: ActionTypes.CurrentUserLoaded;
  payload: {
    user: UserWithCredentials;
  };
}

export const useActions = (
  state: BudgeteeringState,
  dispatch: Dispatch<BudgeteeringAction>
): BudgeteeringActionCreators => ({
  addTransaction: (transaction: Transaction) =>
    dispatch({
      type: ActionTypes.TransactionAdd,
      payload: {
        transaction,
      },
    }),
  currentUserLoaded: (user: UserWithCredentials) =>
    dispatch({
      type: ActionTypes.CurrentUserLoaded,
      payload: {
        user,
      },
    }),
});
