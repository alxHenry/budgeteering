import * as firebase from 'firebase';
import { FC, useEffect } from 'react';

const FirebaseAuth: FC = () => {
  useEffect(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  return null;
};

export default FirebaseAuth;
