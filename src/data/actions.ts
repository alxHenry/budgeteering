import { Dispatch } from 'react';
import { Transaction } from './types';
import { BudgeteeringState } from './types/state';

export type BudgeteeringAction = AddTransactionAction;

export enum ActionTypes {
  TransactionAdd = 'TRANSACTION.ADD',
}

export interface BudgeteeringActionCreators {
  addTransaction(transaction: Transaction): void;
}

export interface AddTransactionAction {
  type: ActionTypes.TransactionAdd;
  payload: {
    transaction: Transaction;
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
});
