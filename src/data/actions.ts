import { Dispatch } from 'react';
import { Transaction, User } from './types';
import { BudgeteeringState } from './types/state';

export type BudgeteeringAction = AddTransactionAction | CurrentUserLoaded;

export enum ActionTypes {
  TransactionAdd = 'TRANSACTION.ADD',
  CurrentUserLoaded = 'CURRENT_USER.LOADED',
}

export interface BudgeteeringActionCreators {
  addTransaction(transaction: Transaction): void;
  currentUserLoaded(user: User): void;
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
    user: User;
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
  currentUserLoaded: (user: User) =>
    dispatch({
      type: ActionTypes.CurrentUserLoaded,
      payload: {
        user,
      },
    }),
});
