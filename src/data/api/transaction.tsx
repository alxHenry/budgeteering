import { Transaction } from 'data/types';
import { firestore } from '../../firebase';
import { normalizeTransaction } from './normalize/transaction';

export interface DraftTransaction {
  amount: Transaction['amount'];
  transactor: Transaction['transactor'];
  category: Transaction['category'];
  note: Transaction['note'];
}

export const postTransaction = async (draftTransaction: DraftTransaction): Promise<Transaction | undefined> => {
  const userRef = firestore.collection('user').doc('jkYG7hPix8b9zU7BdhJC');

  const docReference = await firestore.collection('transaction').add({
    ...draftTransaction,
    transactor: userRef,
  });
  const docSnapshot = await docReference.get();

  return normalizeTransaction(docSnapshot);
};
