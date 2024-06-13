// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDisXQXdQX81GBcA7TY_zFLoop7jGjmYCk",
  authDomain: "sacrosantolagloria.firebaseapp.com",
  projectId: "sacrosantolagloria",
  storageBucket: "sacrosantolagloria.appspot.com",
  messagingSenderId: "61951344274",
  appId: "1:61951344274:web:a2024b45bbd403c10bf04b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
