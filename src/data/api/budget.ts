import { Budget } from 'data/types';
import { firestore } from '../../firebaseSetup';

let unsubscribe: () => void;

export const fetchBudget = async (id: string) => {
  const budget = await firestore
    .collection('budget')
    .doc(id)
    .get();

  const data = budget.data() as Budget | null;
  if (!data) {
    return null;
  }

  return data;
};

export const postBudget = (budget: Budget) => firestore.doc(`budget/${budget.id}`).update(budget);

export const subscribeToBudget = (id: string, onUpdate: (snap: firebase.firestore.DocumentSnapshot) => void) => {
  unsubscribe = firestore
    .collection('budget')
    .doc(id)
    .onSnapshot(onUpdate);
};

export const unsubscribeFromBudget = () => {
  unsubscribe();
};
