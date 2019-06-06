import { firestore } from '../../firebaseSetup';
import { normalizeBudget, PreNormalizedBudget } from './normalize/budget';

let unsubscribe: () => void;

export const getBudget = async (id: string) => {
  const budget = await firestore
    .collection('budget')
    .doc(id)
    .get();

  const data = budget.data() as PreNormalizedBudget | null;
  if (!data) {
    return null;
  }

  return normalizeBudget({
    ...data,
    id,
  });
};

export const subscribeToBudget = (id: string, onUpdate: (snap: firebase.firestore.DocumentSnapshot) => void) => {
  unsubscribe = firestore
    .collection('budget')
    .doc(id)
    .onSnapshot(onUpdate);
};

export const unsubscribeFromBudget = () => {
  unsubscribe();
};
