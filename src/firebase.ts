import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './secret';

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
