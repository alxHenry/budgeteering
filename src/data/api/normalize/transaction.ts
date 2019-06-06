import { Transaction, User } from 'data/types';

export interface PreNormalizedTransaction {
  id: string;
  transactor: firebase.firestore.DocumentReference;
  amount: number;
  category: string;
  note: string;
}

export const normalizeTransactionPost = (doc: firebase.firestore.DocumentSnapshot): Transaction | undefined => {
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

export const normalizeTransactionGet = async (
  preNormalizedTransactionDoc: firebase.firestore.DocumentSnapshot
): Promise<Transaction | null> => {
  const preNormalizedTransaction = preNormalizedTransactionDoc.data() as PreNormalizedTransaction | undefined;
  if (!preNormalizedTransaction) {
    return null;
  }

  const userRef = preNormalizedTransaction.transactor;
  const user = await userRef.get();
  const userData = user.data() as User | undefined;
  if (!userData) {
    return null;
  }

  return {
    ...preNormalizedTransaction,
    id: preNormalizedTransactionDoc.id,
    transactor: userData,
  };
};
