import { Transaction } from 'data/types';

export const normalizeTransaction = (doc: firebase.firestore.DocumentSnapshot): Transaction | undefined => {
  const docData = doc.data();
  if (!docData) {
    return;
  }

  return {
    id: doc.id,
    amount: docData.amount,
    category: docData.category,
    note: docData.note,
    transactor: docData.transactor,
  };
};
