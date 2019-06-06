import { BudgetPeriod, RefillType, Transaction } from 'data/types';
import { normalizeTransactionGet } from './transaction';

export interface PreNormalizedBudgetPeriod {
  id: string;
  transactions: firebase.firestore.DocumentReference[];
  startingAmount: number;
  refillType: RefillType;
}

export const normalizedBudgetPeriod = async (
  preNormalizedBudgetPeriodDoc: firebase.firestore.DocumentSnapshot
): Promise<BudgetPeriod | null> => {
  const preNormalizedBudgetPeriod = preNormalizedBudgetPeriodDoc.data() as PreNormalizedBudgetPeriod | undefined;
  if (!preNormalizedBudgetPeriod) {
    return null;
  }

  const transactionFetches = preNormalizedBudgetPeriod.transactions.map(transaction => transaction.get());
  const preNormalizedTransactions = await Promise.all(transactionFetches);
  const normalizedTransactions = await Promise.all(preNormalizedTransactions.map(normalizeTransactionGet));
  const transactions = normalizedTransactions.filter(isNonNullTransaction);

  return {
    ...preNormalizedBudgetPeriod,
    id: preNormalizedBudgetPeriodDoc.id,
    transactions,
  };
};

function isNonNullTransaction(possibleTransaction: Transaction | null): possibleTransaction is Transaction {
  return !!possibleTransaction;
}
