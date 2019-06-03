import { User } from 'data/types';
import { firestore } from '../../firebase';
import { normalizeUser } from './normalize/user';

export const getCurrentUser = async (): Promise<User | undefined> => {
  const userRef = firestore.collection('user').doc('jkYG7hPix8b9zU7BdhJC');
  const userSnap = await userRef.get();

  return normalizeUser(userSnap);
};
