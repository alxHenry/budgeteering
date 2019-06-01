import { RefillType } from 'data/types';
import { endOfDay, endOfMonth, endOfWeek } from 'date-fns';

export const getNextRefillDate = (refillType: RefillType): Date => {
  switch (refillType) {
    case RefillType.daily:
      return endOfDay(Date.now());
    case RefillType.weekly:
      return endOfWeek(Date.now());
    case RefillType.monthly:
    default:
      return endOfMonth(Date.now());
  }
};
