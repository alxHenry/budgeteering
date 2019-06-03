import { User } from 'data/types';

export const normalizeUser = (doc: firebase.firestore.DocumentSnapshot): User | undefined => {
  const docData = doc.data();
  if (!docData) {
    return;
  }

  return {
    id: doc.id,
    name: docData.name,
  };
};
