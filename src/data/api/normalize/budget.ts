import { Budget, BudgetPeriod, RefillType } from 'data/types';
import { normalizedBudgetPeriod } from './budgetPeriod';

export interface PreNormalizedBudget {
  id: string;
  periods: firebase.firestore.DocumentReference[];
  refillType: RefillType;
  refillAmount: number;
  nextRefillDate: firebase.firestore.Timestamp;
}

export const normalizeBudget = async (budget: PreNormalizedBudget): Promise<Budget | undefined> => {
  const budgetPeriodRefs = budget.periods;
  const budgetPeriodFetches = budgetPeriodRefs.map(budgetPeriodRef => budgetPeriodRef.get());
  const preNormalizedBudgetPeriods = await Promise.all(budgetPeriodFetches);
  const normalizedBudgetPeriods = await Promise.all(preNormalizedBudgetPeriods.map(normalizedBudgetPeriod));
  const budgetPeriods = normalizedBudgetPeriods.filter(isNonNullBudgetPeriod);

  return {
    id: budget.id,
    refillType: budget.refillType,
    refillAmount: budget.refillAmount,
    nextRefillDate: budget.nextRefillDate.toDate(),
    periods: budgetPeriods,
  };
};

function isNonNullBudgetPeriod(possibleBudgetPeriod: BudgetPeriod | null): possibleBudgetPeriod is BudgetPeriod {
  return !!possibleBudgetPeriod;
}
