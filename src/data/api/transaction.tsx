import { Transaction } from 'data/types';
import { firestore } from '../../firebaseSetup';
import { normalizeTransactionPost } from './normalize/transaction';
import { normalizeUser } from './normalize/user';

export interface DraftTransaction {
  amount: Transaction['amount'];
  transactor: Transaction['transactor'];
  category: Transaction['category'];
  note: Transaction['note'];
}

export const postTransaction = async (draftTransaction: DraftTransaction): Promise<Transaction | undefined> => {
  const userRef = firestore.collection('user').doc('jkYG7hPix8b9zU7BdhJC');
  const userSnap = await userRef.get();
  const user = normalizeUser(userSnap);

  const docReference = await firestore.collection('transaction').add({
    ...draftTransaction,
    transactor: user,
  });
  const docSnapshot = await docReference.get();

  return normalizeTransactionPost(docSnapshot);
};
