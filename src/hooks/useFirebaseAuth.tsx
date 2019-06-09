import StoreContext from 'data/state/StoreContext';
import * as firebase from 'firebase';
import { useContext, useEffect } from 'react';

const useFirebaseAuth = () => {
  const { actionCreators } = useContext(StoreContext);

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (!result.credential || !result.user) {
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

        console.warn(
          `Failed to log user in. Code: ${errorCode}  Message: ${errorMessage}  Email: ${email}  Cred: ${JSON.stringify(
            credential
          )}`
        );
      });
  }, []);
};

export default useFirebaseAuth;
