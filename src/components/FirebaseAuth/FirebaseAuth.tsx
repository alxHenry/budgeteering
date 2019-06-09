// const firebase = require('firebase');
import StoreContext from 'data/state/StoreContext';
import * as firebase from 'firebase';
import { FC, useContext, useEffect } from 'react';

const FirebaseAuth: FC = () => {
  const { actionCreators } = useContext(StoreContext);

  useEffect(() => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (!result.credential || !result.user) {
          firebase.auth().signInWithRedirect(provider);
          throw Error('Sign in does not have all info or was not started!');
        }

        const cred = result.credential as firebase.auth.OAuthCredential;
        if (!cred.accessToken) {
          throw Error('No access token for user!');
        }

        const { uid, displayName, email } = result.user;
        actionCreators.currentUserLoaded({
          id: uid,
          name: displayName || email || 'Anonymous User',
          email: email || '',
          accessToken: cred.accessToken,
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log(
          `Failed to log user in. Code: ${errorCode}  Message: ${errorMessage}  Email: ${email}  Cred: ${JSON.stringify(
            credential
          )}`
        );
      });
  }, []);

  return null;
};

export default FirebaseAuth;
