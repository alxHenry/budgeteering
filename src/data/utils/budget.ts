import { Budget, BudgetPeriod, Transaction } from 'data/types';

export const addTransactionToBudget = (budgetToModify: Budget, newTransaction: Transaction): Budget => {
  const previousPeriods = getPreviousPeriods(budgetToModify);
  const currentPeriod = getCurrentPeriod(budgetToModify);
  const updatedTransactions = [...currentPeriod.transactions, newTransaction];
  const updatedCurrentPeriod = {
    ...currentPeriod,
    transactions: updatedTransactions,
  };
  const updatedBudget = {
    ...budgetToModify,
    periods: [...previousPeriods, updatedCurrentPeriod],
  };

  return updatedBudget;
};

export const getCurrentPeriod = (budget: Budget): BudgetPeriod => budget.periods.slice(-1)[0];

export const getPreviousPeriods = (budget: Budget): BudgetPeriod[] => budget.periods.slice(0, -1);
