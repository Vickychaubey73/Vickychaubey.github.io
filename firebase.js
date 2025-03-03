import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpOkqXokE7wbdG3EVn3-n_GlhmGrC6Y4s",
  authDomain: "Vicky-chaubey-ab9f9.firebaseapp.com",
  projectId: "Vicky-chaubey-ab9f9",
  storageBucket: "Vicky-chaubey-ab9f9.firebasestorage.app",
  messagingSenderId: "307289701166",
  appId: "1:307289701166:web:f8abf3f686badebee618bf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);