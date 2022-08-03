// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHInfZ-XHzu_Hmrezjs-whFMtqkfC35UQ',
  authDomain: 'wheres-waldo-9d15c.firebaseapp.com',
  projectId: 'wheres-waldo-9d15c',
  storageBucket: 'wheres-waldo-9d15c.appspot.com',
  messagingSenderId: '109915597097',
  appId: '1:109915597097:web:ea8db99c537417936faf38',
  measurementId: 'G-H53X39DQ3F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
