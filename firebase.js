// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAW54AbOzbpzgt4IayzKJXgDd2galpEIMg",
  authDomain: "gvu-pqs-a275f.firebaseapp.com",
  databaseURL: "https://gvu-pqs-a275f-default-rtdb.firebaseio.com",
  projectId: "gvu-pqs-a275f",
  storageBucket: "gvu-pqs-a275f.appspot.com",
  messagingSenderId: "992695948662",
  appId: "1:992695948662:web:be5255eb7be8d637db9657",
  measurementId: "G-6VHJJLXST7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

