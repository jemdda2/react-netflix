import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB3T-fMnuWuyu26w8OV1Ocy80AO_oaUui8',
  authDomain: 'netflix-dc3d9.firebaseapp.com',
  databaseURL: 'https://netflix-dc3d9.firebaseio.com',
  projectId: 'netflix-dc3d9',
  storageBucket: 'netflix-dc3d9.appspot.com',
  messagingSenderId: '274432646147',
  appId: '1:274432646147:web:70679e10d7be67a7ab8236',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
