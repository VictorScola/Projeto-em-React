import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcJuyhY57iTFX4jbBkKRTGB21-pcviwLo',
  authDomain: 'app-somativa-3ed4c.firebaseapp.com',
  projectId: 'app-somativa-3ed4c',
  storageBucket: 'app-somativa-3ed4c.firebasestorage.app',
  messagingSenderId: '370296337078',
  appId: '1:370296337078:web:53802a9f52aa628aedec17',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
